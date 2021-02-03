var os = $.require("os");
var output = {};
output.tmpdir = os.tmpdir();
output.ndianness = os.endianness();
output.hostname = os.hostname();
output.type = os.type();
output.platform = os.platform();
output.arch = os.arch();
output.release = os.release();
output.uptime = os.uptime();
output.loadavg = os.loadavg();
output.cpus = os.cpus();
output.networkInf = os.networkInterfaces();
output.freemem = os.freemem();

$.response.status = $.net.http.OK;
$.response.contentType = "application/json";
$.response.setBody(output);