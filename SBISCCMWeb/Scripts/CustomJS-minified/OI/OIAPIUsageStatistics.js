﻿function onLoadDataQueueStatistics() { InitDataTable(".tbAPIUsagGrid", [10, 20, 30], !1, [0, "desc"]) } $("body").on("click", ".DownloadOIDataQueueStatistics", function () { $("#IsDownload").val(!0), $("#frmOIDataQueueStatistics").submit() });