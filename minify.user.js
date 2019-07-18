// ==UserScript==
// @name     Minify Window
// @version  1.0
// @grant    none
// @include  *
// @author Shaun Foxcroft <sfoxcroft@outlook.com> (https://github.com/S-Foxcroft)
// ==/UserScript==
function run(){
  var g = document.location.href;
  if(g + " <Mini>" == window.name) return;
	var elem = document.createElement("div");
	elem.style = "display:block;position:fixed;bottom:5px;right:5px;background-color:black;background-repeat:no-repeat;"+
	             "background-size: 65% 65%;border-radius:20px;width:40px;height:40px;z-index:999;background-position:center;"+
               "background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAMAAABn7db1A"+
               "AAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAJqLcM+LFsuLHcqLH8yLHN+WF9uWH92VGt2VG9"+
               "+WGd2WG92WHNyWHdyWHsqMIcuMIsmMI8mNJcmNJsiNJ8mNKMiOKMiOLMiPLciPL8eQMMeQMseTOceUO8eUPMeVP8i"+
               "RNMiSN8iUOteYLNeZLdeZLteZL9uWINuWIduXItqXI9qXJNqXJdmXJtmXJ9+ZIdmYKNiYKdiYKtiYK9eaMdeaMtaa"+
               "M9ebNdabNtacONacOdadOtadPNadPdaeP+eXDOaWDeaXDuWWD+mXC+mXDO6ZB+uYCuyYCOyYCeKWEuGWE+CVFeCVF"+
               "uGWFOCWFuSWEfKaBfCaBv6gAMeWQMiXQ8iXRMiYRciYRsmZR8maScmaSsmaS8mbTMmcT8qdUcqeUcqfVMufVtWfQd"+
               "WfQsuhV8uhWMyjXMyjXdWgQ9ahRdahSNaiSNaiSdajS9ajTNekTdekTtelUNelUdemVNenVdenVtepWNipWc+oZ9C"+
               "qatuzbN/FmOPCiuzXtffozf/y3ejo6Onp6fbx6ffy6vPz8//79fj4+Pz8/P39/f///wAAAAAAAAAAAAAAAAAAAAAA"+
               "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
               "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
               "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
               "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
               "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
               "AAAAP36DkgAAAEAdFJOU/////////////////////////////////////////////////////////////////////"+
               "/////////////////////////////////////////////////////////////////////////////////////////"+
               "/////////////////////////////////////////////////////////////////////////////////////////"+
               "/////////////////////////////////////////////////////////////////////////////////////////"+
               "////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjIx8SBplQ"+
               "AABzJJREFUeF7dnPlj1EQUx+uFCihWRRE8UORSVPBAQRQBAblpVeqF4I0g3ngrXoD81esm+2m7M/vyMsnMmyz9/NL"+
               "dfGfe+xDSPdJkJnqJOThtytSvF//+78rVf68kFqe8Kecv/nP56uW04pS25rdLf169JsWnf7n017UpPv174j0+RV1z"+
               "pi5dg7+cJX8kFt9EXXNuTyzeW0xhc1KL945T2Jrk4rkO8/TimcwNxPOYW4hnMTcRz2FuI57htcVI3H6fW4mbm5uJW"+
               "3/gshM33ueG4rbmluKm5qbilq+KtuKG+9xY3G6fW4ubmZuLWx0t9uJG5hnEbcxziJuYZxHvvUa3hOQR762nXToyif"+
               "fO0C8ZucSTH+cLV/z0uw+uXD45OXnDjZN3r1j18P1vVfDeOzOnZk7edB3TfGiXDkX8SYY0grk+pAmpEm/5xYvZPqQ"+
               "pEcW3ETaG+T6kSRHENxA153squHxNmpYR8Q8JWvAjJVy+JE2ML87mNlyghMvLpKnxxNnahq2UcIn4D9RxxB9jYxvW"+
               "UMPlHGl6hsXZ1Ap5f58lNWBInC2tkL3t9vewOBtaIXtvJzVhTjzmHOWj1HB5idSGWfH27zrT02up4bKF1AjEf+BpG"+
               "+Tj5GlSKxDnWRvk18GtpGYMxBfxrAWbywI+L5LaMRDnSQvWlfN9bH8vS0pxHrdgfenp8wypJXHie0pPn3WkphTiPG"+
               "zOgYGoxxpSW0LFj18/+g61YyDqcZTUmL649pnw2El0glnCTGv64jwSeA6ZBhi/X86jiO/HpQmtTmm0YqLyU4r8Sqe"+
               "T43UQJqp2+GFcmpDtOOlTKY5LE/K8DsLEBR544NKEbNcclkzw06PFgXIbUzNRIY5MA44xMxepxHN7pxLfx7x8yOKL"+
               "8QllP/MyIoufQCgQZmVFFj+FURhMyoss/ilKQeS6ftlFFm/yYXYPczIji7+NVABLmZIbWfwhrOqJOZMUhSy+Gq16m"+
               "JAfWfxetGrJ/oY5hyx+F161ML4DZPE78Kqjg3fMWWTxZYjVwfAukMXvRKyGEww34Cl+VhIlvpfh6ak/vx4lzuj0FM"+
               "VrzrCPpfiguv4ddhzFqd7bzHORGPHTjE4M1fusZYtEjPgMo9NC8RLljN7YiVMbqj97jpn4FKXnqLw/NEb8M0anYze"+
               "VhzhA5BMjnvxVZSd1Hch8xklc2N8FpB5jJL6LqiOQu0SJJ72z+hhFBRjhECWecpdXHCcDGDPMuIgr+7uAUUPEiX/D"+
               "+GgWUbASxs0TJ55qlx+knAIj54gUT2N+lGIqjJ0lVjzFH8BvpVYNjIZY8QS7XL6UQYDxA6LFo82DjpMBzCiJF480v"+
               "5kqQTCnIIF4lPkRagQyf14hhXiEeaP9XbCRiXuTiLc2v4X5Lou8r0EOLwxm9tKItzRfwmyX3f73N49yairxVuby60"+
               "lx5pqHFZwrBqQSb2F+iJkurxQRjzWSiTc2lz8P9o+TPjzRSCfe0Hwps1z4CwfPNBKKNzKXryvZRcpTjZTiDczl75e"+
               "z3tnFg833Mt5l/m2RDRppxUPNGe0yt7+7EA8zZ6zLEcICNmmkFg8xZ6SLsxYo2zSSi9ebM85l6Djpw0aN9OJ15oxy"+
               "cb07ElfNR84jl+wknYXNGhbiivkWRriMLJTAdg0T8d4T1PEh9iAcgkDDRlze6RvIPEiHIdGwEh+9FLFCW/wnEmnYi"+
               "feZP1sk3w5XwAAXMg1T8QDkW5oJNboWp6EHocYCE58ktYeGHoQaC0w8+GKyaGjoQaghi99Dag8NPQg1ZPHg6w6joa"+
               "EHoYYsfh+pPTT0INSQxVeS2kNDD0INWXwVqT3ycgCEGrJ4w1sNIlhGRxdCDVm8wfXjkUzS0YVQQxZ/n9Se5XR0IdS"+
               "QxRvdIxHFCjq6EGrI4j+T2rOaji6EGrI4YQYeoaMLoUbX4q/T0YVQo2vxN+noQqjRtfgpOroQanQt/jEdXQg1uhb/"+
               "hI4uhBpdi39ARxdCjQV2jJ8mtecNOroQasjiD5Dac4iOLoQasrh8VYMFNHQJWfVCFs93kNPPJeQr71iKh9yVWSH+P"+
               "LE18tLHP5FqTHzBYA9ia+jmQahStdqHvN5YairWmiZVSblMSXPo5UOqMlG5WhEDLKGTzyZiFWUNIUbYQZ8RiHW0VZ"+
               "uq/3CTgup78Big0xdX7t89zygD6CBQeZOHQ19cqdHn7GBcUmZepbgIg2qoFc/PQKyOQnwHM8YDeeXHEQrx8drlpVY"+
               "9pXjVNQNdELogWik+Tru89AlgIP4ds7rn29IngIE4l7R2z76BTgCIj8vBgk0As+LjYY5LCHPiVkvKN2EbLiHMiUct"+
               "K52G7ZgEMS+eedm/UeQr5KoYEu89S4Vu+AiLQIbFO/0NxSAYV7w7c/qH44mbrudfzVd0b4Av3usdplg+HqdzI0bFo"+
               "5ZRb8FGujZEEs/5bnSGjo2RxftYL+5f8Dm92lApXlC10kYK2qxEPE+v9z/Jmmwe/6RDqgAAAABJRU5ErkJggg==);"+
               "cursor:pointer";
	elem.addEventListener('click',function(){
		window.open(g,g+" <Mini>","menubar=no,toolbar=no,status=no,location=no");
           //  (url,name,options)
    close();
	});
	document.body.appendChild(elem);
}
setTimeout(run,75);