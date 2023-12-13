document.getElementById('menu-1-button').addEventListener('click', myFunction1);
document.getElementById('menu-2-button').addEventListener('click', myFunction2);
document.getElementById('menu-3-button').addEventListener('click', myFunction3);
document.getElementById('menu-4-button').addEventListener('click', myFunction4);

function myFunction1()
{
  document.getElementById('menu-1').classList.add('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
}

function myFunction2()
{
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.add('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
}

function myFunction3()
{
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.add('show');
  document.getElementById('menu-4').classList.remove('show');
}

function myFunction4()
{
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.add('show');
}

function myFunction() {
  alert("Very nice!");
}


document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){
	document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
	}
});

