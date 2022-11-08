function sum(a,b)
{
    return a+b;
}

module.exports.sum = sum;


function subtract(a,b)
{
    return a-b;
}

module.exports.subtract = subtract;

function mul(a,b)
{
    return a*b;
}

module.exports.mul = mul;

function div(a,b)
{
    if(b != 0)
    {
    return a/b;
    }

    else{
       return "invalid";
    }

}

module.exports.div = div;



