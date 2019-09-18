function test(x)
{
  return x + 1;
}

function move(x)
{
  if(x.innerHTML === "-")
    x.innerHTML = "X";
    
  else if(x.innerHTML === "X")
      x.innerHTML = "O";
    
  else if(x.innerHTML === "O")
        x.innerHTML = "-";
}

function winner(x)
{
    x.innerHTML = "Congratulations!";
}
