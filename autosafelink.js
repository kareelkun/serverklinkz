var b64c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
var b64u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
var b64pad='='
function base64_encode_data(data,len,b64x){var dst=""
var i
for(i=0;i<=len-3;i+=3)
{dst+=b64x.charAt(data.charCodeAt(i)>>>2)
dst+=b64x.charAt(((data.charCodeAt(i)&3)<<4)|(data.charCodeAt(i+1)>>>4))
dst+=b64x.charAt(((data.charCodeAt(i+1)&15)<<2)|(data.charCodeAt(i+2)>>>6))
dst+=b64x.charAt(data.charCodeAt(i+2)&63)}
if(len%3==2)
{dst+=b64x.charAt(data.charCodeAt(i)>>>2)
dst+=b64x.charAt(((data.charCodeAt(i)&3)<<4)|(data.charCodeAt(i+1)>>>4))
dst+=b64x.charAt(((data.charCodeAt(i+1)&15)<<2))
dst+=b64pad}
else if(len%3==1)
{dst+=b64x.charAt(data.charCodeAt(i)>>>2)
dst+=b64x.charAt(((data.charCodeAt(i)&3)<<4))
dst+=b64pad
dst+=b64pad}
return dst}
function base64_encode(str){var utf8str=unescape(encodeURIComponent(str))
return base64_encode_data(utf8str,utf8str.length,b64c)}
function base64url_encode(str){var utf8str=unescape(encodeURIComponent(str))
return base64_encode_data(utf8str,utf8str.length,b64u)}
function base64url_sniff(base64){if(base64.indexOf("-")>=0)return!0
if(base64.indexOf("_")>=0)return!0
return!1}
function extractDomain(url) {
	var hostname;
	if (url.indexOf("://") > -1) {hostname = url.split('/')[2];}
	else {hostname = url.split('/')[0];}
	hostname = hostname.split(':')[0];
	hostname = hostname.split('?')[0];
	return hostname;
}
function cekantisafelink(){
	var cekantisafelink = new Array();	
	SETTINGKlinkz.URLnoSAFE = SETTINGKlinkz.URLnoSAFE;
	cekantisafelink = SETTINGKlinkz.URLnoSAFE.split(",");
	return cekantisafelink;
}
function convertstr(str) {
	return str.replace(/^\s+/, '').replace(/\s+$/, '');
}
if (!SETTINGKlinkz.URLnoSAFE) { SETTINGKlinkz.URLnoSAFE = window.location.href; }else { SETTINGKlinkz.URLnoSAFE += ","+window.location.href; }
var cekantisafelink = cekantisafelink();
    var periksa = false;
	var no = 0;
	var cekantisafelinklength = cekantisafelink.length;
	var periksalink = "";
	var periksacekantisafelink = "";	
	var linktagMauDiganti = document.getElementsByTagName("a");
	for (var i = 0; i < linktagMauDiganti.length; i++) {	
		periksa = false;
		no = 0;
		while (periksa == false && no < cekantisafelinklength) {
			periksalink = extractDomain(linktagMauDiganti[i].href);
			periksacekantisafelink = extractDomain(cekantisafelink[no]);
			if (periksalink.match(periksacekantisafelink)) {
				periksa = true;
			}
			no++;
		}
		if (periksa == false) {
		var urlakandiENCODE = convertstr(linktagMauDiganti[i].href);
			linktagMauDiganti[i].href = SETTINGKlinkz.URLSAFELINK+'?kareeI='+base64_encode(urlakandiENCODE+'||'+SETTINGKlinkz.TITLElink+'||'+SETTINGKlinkz.PASSlink+'||'+SETTINGKlinkz.LINKproperty+'||'+SETTINGKlinkz.VERIFYlink+'||'+SETTINGKlinkz.COUNTDOWNlink+'||'+SETTINGKlinkz.CLICK2Xlink+'||');
			linktagMauDiganti[i].rel = "nofollow";
			linktagMauDiganti[i].target = "_blank";
		}
	}
