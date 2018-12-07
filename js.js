 var xhr=new XMLHttpRequest();
 xhr.addEventListener('readystatechange',onReady);
 xhr.open('GET','/data.json',true);
 xhr.send();
 document.getElementById('loader').setAttribute('style','display:block');
 function onReady(){
	if(xhr.readyState==4 && xhr.status==200){
		var data=JSON.parse(xhr.responseText)
		for(var i=0; i<data.length; i++){
			var el=document.createElement('div');
			el.innerText=data[i].name;
			document.getElementById('list').appendChild(el);
		}
		document.getElementById('loader').setAttribute('style','display:none');
	}
 }