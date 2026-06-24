//soal nomor 1

const logs = [
  "LOGIN|andi|2026-06-01",
  "LOGIN|budi|2026-06-02",
  "LOGOUT|andi|2026-06-03",
  "LOGIN|andi|2026-06-04",
  null,
  undefined,
  "INVALID",
];

const report = processEventLogs(...logs);
console.log(report);

function processEventLogs(...rawLogs) {
  let validCount = 0;

  function isValid(log) {
    if (typeof log !== "string" || !log.includes("|")) return false;

    const parts = log.split("|");
    if (parts.length !== 3) return false;
    const logDate = new Date(parts[2]);
    return !Number.isNaN(logDate.getTime());
  }

  const cleanLogs = rawLogs.filter((log) => {
    const status = isValid(log);
    if (status) validCount++;
    return status;
  });

  const summary = cleanLogs.reduce(
    (acc, currentLog) => {
      const [action, username, dateStr] = currentLog.split("|");
      const logDate = new Date(dateStr);

      if (action === "LOGIN") {
        acc.loginCount[username] = (acc.loginCount[username] || 0) + 1;
      }
      acc.userSet.add(username);

      if (!acc.oldest || logDate < acc.oldest) acc.oldest = logDate;
      if (!acc.newest || logDate > acc.newest) acc.newest = logDate;

      return acc;
    },
    { loginCount: {}, userSet: new Set(), oldest: null, newest: null },
  );
  const { loginCount, userSet, oldest, newest } = summary;

  return {
    totalValidLogs: validCount,
    uniqueUsers: [...userSet],
    loginCount: { ...loginCount },
    oldestLog: oldest ? oldest.toISOString().split("T")[0] : null,
    newestLog: newest ? newest.toISOString().split("T")[0] : null,
  };
}

//soal nomor 3

const wallet = createWallet(1000);

wallet.deposit(500);
wallet.withdraw(200);
wallet.withdraw(2000);

console.log(`Saldo Saat Ini: ${wallet.balance()}`);
console.log("Riwayat Transaksi:", wallet.history());

function createWallet(initialBalance) {
  let balance =
    Number.isFinite(initialBalance) && initialBalance > 0 ? initialBalance : 0;
  const transactionLogs = [];

  function recordTransaction(type, amount, status) {
    const now = new Date();
    transactionLogs.push({
      timestamp: now.toISOString(),
      type,
      amount,
      status,
    });
  }

  return {
    balance: function () {
      return balance;
    },
    deposit: function (amount) {
      if (typeof amount !== "number" || amount <= 0)
        return "Jumlah deposit tidak valid";
      balance += amount;
      recordTransaction("DEPOSIT", amount, "SUCCESS");
      return `Berhasil menyimpan ${amount}`;
    },
    withdraw: function (amount) {
      if (typeof amount !== "number" || amount <= 0)
        return "Jumlah penarikan tidak valid";
      if (amount > balance) {
        recordTransaction("WITHDRAW", amount, "FAILED (Insufficient Balance)");
        return "Transaksi Gagal: Saldo tidak mencukupi!";
      }
      balance -= amount;
      recordTransaction("WITHDRAW", amount, "SUCCESS");
      return `Berhasil menarik ${amount}`;
    },
    history: function () {
      return transactionLogs.map((log) => {
        const { ...logCopy } = log;
        return logCopy;
      });
    },
  };
}

//soal nomor 3

const result = generatePayroll(
  { name: "Andi", basicSalary: "5000000", allowance: "1000000" },
  { name: "Budi", basicSalary: "4500000", allowance: "750000" },
);

console.log(result);

function generatePayroll(...employees) {
  const processedEmployees = employees.map(
    ({ name, basicSalary, allowance }) => {
      const totalSalary =
        Number.parseInt(basicSalary, 10) + Number.parseInt(allowance, 10);
      return { name, totalSalary };
    },
  );

  const totalCompanyExpense = processedEmployees.reduce(
    (sum, { totalSalary }) => sum + totalSalary,
    0,
  );

  const highestPaid = processedEmployees.reduce(
    (max, current) => (current.totalSalary > max.totalSalary ? current : max),
    processedEmployees[0],
  );

  const lowestPaid = processedEmployees.reduce(
    (min, current) => (current.totalSalary < min.totalSalary ? current : min),
    processedEmployees[0],
  );

  const finalReport = {
    employeeDetails: [...processedEmployees],
    totalCompanyExpense,
    highestPaid: { ...highestPaid },
    lowestPaid: { ...lowestPaid },
  };

  return finalReport;
}

//soal nomor 4

const reports = [
  inspectCollection("hello"),
  inspectCollection([1, 2, 3]),
  inspectCollection(new Set([1, 2, 3])),
  inspectCollection(new Map([["a", 1]])),
  inspectCollection({ a: 1, b: 2 }),
  inspectCollection(12345),
];

reports.forEach((report) => console.log(report));

function inspectCollection(data) {
  const isIterable =
    data != null && typeof data[Symbol.iterator] === "function";

  if (isIterable) {
    const items = [...data];
    const size = items.length;

    return {
      type: "Iterable",
      itemCount: size,
      firstElement: size > 0 ? items[0] : null,
      lastElement: size > 0 ? items[size - 1] : null,
    };
  }

  const isObject = data !== null && typeof data === "object";
  const keys = isObject ? Object.keys(data) : [];

  return {
    type: "Non-Iterable",
    itemCount: keys.length,
    keys: keys,
  };
}

//soal nomor 5

const tracker = createAccessTracker();

tracker.enter("Andi");
tracker.enter("Budi");
tracker.enter("Andi");

console.log(tracker.report());
console.log(`Kunjungan Terakhir Andi: ${tracker.lastVisit("Andi")}`);

function createAccessTracker() {
  const visitorMap = new Map();
  let totalEntriesCount = 0;

  return {
    enter: function (name) {
      if (typeof name !== "string" || name.trim() === "") return;

      const now = new Date();
      const currentData = visitorMap.get(name) || { count: 0, dates: [] };

      currentData.count += 1;
      currentData.dates.push(now);

      visitorMap.set(name, currentData);
      totalEntriesCount++;
    },

    lastVisit: function (name) {
      const data = visitorMap.get(name);
      if (!data || data.dates.length === 0) return null;

      const lastDate = data.dates[data.dates.length - 1];
      return lastDate.toISOString();
    },

    report: function () {
      const entriesResult = {};
      let maxCount = 0;
      let frequentVisitor = null;

      visitorMap.forEach((value, key) => {
        entriesResult[key] = value.count;

        const isMoreFrequent = checkFrequency(value.count, maxCount);
        if (isMoreFrequent) {
          maxCount = value.count;
          frequentVisitor = key;
        }
      });

      return {
        totalEmployees: visitorMap.size,
        totalEntries: totalEntriesCount,
        mostFrequentVisitor: frequentVisitor,
        entries: { ...entriesResult },
      };

      function checkFrequency(currentCount, currentMax) {
        return currentCount > currentMax;
      }
    },
  };
}