function first()
{
    console.log("print first");
}
function third()
{
    console.log("print third");
}
first();
setTimeout(function second())
{
    console.log("print second");
}
setTimeout(second,2000);
third();



