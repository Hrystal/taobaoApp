//ajax("post","地址",data,true,function(res){
//	
//			res--返回的数据
//})
		function ajax(type,url,data,async,fn){
			//1.创建对象
			var xhr=null;
			try{
				xhr=new XMLHttpRequest();
			}catch(e){
				xhr=new ActiveXObject("Microsoft.XHLHTTP");
			}
			
			//2.调用open()方法
			if(type=="get"&&type==data){
				url+="?"+data;
			}
			xhr.open(type,url,async);
			
			//3.调用send()方法
			if(type=="post"){
				//设置发送的请求一般我们设置的是：content-type,传输数据类型，即服务器需要我们传达的数据类型
				xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
				xhr.send(data);
			}else{
				xhr.send();
			}
			
			//4.等待返回数据
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					
					//xhr.responseText返回的数据 传到回调函数中
					fn(xhr.responseText)
				}
			}
		}
