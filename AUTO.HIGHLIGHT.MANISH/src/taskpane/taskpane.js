Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
      document.getElementById("highlightRow").onclick = highlightSelectedRow;
  }
});

function highlightSelectedRow() {
  Excel.run(function (context) {
      const sheet = context.workbook.worksheets.getActiveWorksheet();
      const range = context.workbook.getSelectedRange();
      const row = range.getEntireRow();
      row.load("address");

      return context.sync().then(function () {
          sheet.getUsedRange().format.fill.clear();
          row.format.fill.color = "yellow";
          return context.sync();
      });
  });
}
