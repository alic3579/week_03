var myWrapper = document.getElementById("wrapper");

var changingColor = 0;




for (var i = 0; i < 100; i++) {


	var redColor;

		if(i % 5 === 0){
		redColor = 250 ; changingColor = 0;
	} else {
		redColor = 0;
	}


	changingColor = changingColor + 50;


	var degrees;

		if(i % 2 === 0){
			degrees = (i/10) * 360;
		}else{
			degrees = ((i-1)/10) * 360;
		}



	var scale;

		if (i % 7 === 0) {
			scale = 0.7; 
		} else {
			scale = 0.4;
		}



	var myModule = `

	<div 
			class="square" 
			style="border-color: rgb(${redColor},${changingColor},0);"
		>
		

			<div class="invader_wrapper">

				<div class="space-invader" style="transform: rotate(${degrees}deg) scale(${scale});"></div>

			</div>

		</div>
		`;


	if(i % 2 === 0){
				myWrapper.insertAdjacentHTML('beforeend' , myModule);
			}else{
				myWrapper.insertAdjacentHTML('afterbegin' , myModule);
			}




}


