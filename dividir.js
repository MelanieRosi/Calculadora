//

function dividir (parametroDividir1, parametroDividir2)
{
    if (parametroDividir1 && parametroDividir2 !== 0)  return (parametroDividir1 / parametroDividir2)
    else return "No se puede dividir por cero"
    
}

module.exports = (dividir);