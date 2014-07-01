
	var ele=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var ass=["","<font size='8px' color='pink'>2</font>",
	"<font size='8px' color='red'>4</font>",
	"<font size='8px' color='red'>8</font>",
	"<font size='6px' color='grey'>16</font>",
	"<font size='6px' color='blue'>32</font>",
	"<font size='6px' color='green'>64</font>",
	"<font size='4px' color='black'>128</font>",
	"<font size='4px' color='black'>256</font>",
	"<font size='4px' color='yellow'>512</font>",
	"<font size='2px' color='purple'>1024</font>",
	"<font size='4px' color='black'>2048</font>"];
	function myload(){
		randANew();
	}
	//���ȥ��ע��
	function eleSort(a){
		var rr=[0,0,0,0];
		var v=[];
		for(var x=0;x<4;x++){
			if(a[x]==0)
				continue;
			for(var y=x;y<4;y++){
				if(a[y+1]==0)
					continue;
				if(a[x]==a[y+1]){
					v.push(a[x]+1);
					a[x]=0;
					a[y+1]=0;
					break;
				}else{
					v.push(a[x]);
					a[x]=0;
					break;
				}
			}
			if(x==4){
				v.push(a[4]);
			}
		}
		for(var n=0;n<4;n++){
			if(v[n]){
				rr[n]=v[n];
			}
		}
		return rr;
	}
	function keys(e){
		if(e.keyCode=='68'|e.keyCode=='39'){
			for(var i=0;i<4;i++){
				var tt=[0,0,0,0];
				for(var j=0;j<4;j++){
					tt[3-j]=ele[i][j];
				}
				tt=eleSort(tt);
				for(var j=0;j<4;j++){
					ele[i][j]=tt[3-j];
				}
			}
			randANew();
			document.getElementById('tb').style.left='2px';
		}
		if(e.keyCode=="65"|e.keyCode=='37'){
			for(var i=0;i<4;i++){
				var tt=[0,0,0,0];
				for(var j=0;j<4;j++){
					tt[j]=ele[i][j];
				}
				tt=eleSort(tt);
				for(var j=0;j<4;j++){
					ele[i][j]=tt[j];
				}
			}
			randANew();
			document.getElementById('tb').style.left='-2px';
		}
		if(e.keyCode=="87"|e.keyCode=='38'){
			for(var i=0;i<4;i++){
				var tt=[0,0,0,0];
				for(var j=0;j<4;j++){
					tt[j]=ele[j][i];
				}
				tt=eleSort(tt);
				for(var j=0;j<4;j++){
					ele[j][i]=tt[j];
				}
			}
			randANew();
			document.getElementById('tb').style.top='-2px';
		}
		if(e.keyCode=="83"|e.keyCode=='40'){
			for(var i=0;i<4;i++){
				var tt=[0,0,0,0];
				for(var j=0;j<4;j++){
					tt[3-j]=ele[j][i];
				}
				tt=eleSort(tt);
				for(var j=0;j<4;j++){
					ele[j][i]=tt[3-j];
				}
			}
			randANew();
			document.getElementById('tb').style.top='2px';
		}
	}
	function randANew(){
		var jj=(Math.floor(Math.random()*33));
		var i=0;
		var ok=false;
		var or24=(jj%6)?1:2;
		for(var t=0;t<33;t++){
			for(var j=0;j<4;j++){
				if(ele[i][j]==0){
					if(jj!=0)
						jj--;
					else{
						ok=true;
						ele[i][j]=or24;
						break;
					}
				}
			}
			if(ok) break;
			i++;
			if(i==4)
				i=0;
		}
				render();
	}
	function render(){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				document.getElementById('k'+(i+1)+(j+1)).innerHTML=ass[ele[i][j]];
			}
		}
	}
