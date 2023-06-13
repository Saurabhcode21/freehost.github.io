var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

// meter

    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value
    }  else if(inputTypeValue === 'meter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3.28
    }  else if(inputTypeValue === 'meter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 1.093
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 39.37
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 1609
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) * 1000
    }

    // kilometer


    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100000
    }   else if(inputTypeValue === 'kilometer' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3281
    }  else if(inputTypeValue === 'kilometer' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 1094.00
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 39370
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 1.609
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) * 1e+6
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
        result.value = input.value
    }

    // centimeter

    if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.00001
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.01
    }  else if(inputTypeValue === 'centimeter' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) * 10
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) / 30.48
    }  else if(inputTypeValue === 'centimeter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) / 19.44
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) / 2.54
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 160900
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = input.value
    }

    // milemeter

    if(inputTypeValue === 'milemeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) / 1e+6
    } else if(inputTypeValue === 'milemeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) / 1000
    }  else if(inputTypeValue === 'milemeter' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) 
    } else if(inputTypeValue === 'milemeter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) / 304.8
    }  else if(inputTypeValue === 'milemeter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) / 194.4
    } else if(inputTypeValue === 'milemeter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) / 2.54
    } else if(inputTypeValue === 'milemeter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 1.609e+6
    } else if(inputTypeValue === 'milemeter' && resultTypeValue === 'centimeter'){
        result.value =  Number(input.value) / 10
    }
    // mile

    if(inputTypeValue === 'mile' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 1.609
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1609
    }  else if(inputTypeValue === 'mile' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) * 1.609e+6
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 5280
    }  else if(inputTypeValue === 'mile' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 1760
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'inch'){
        result.value = Number(input.value) / 2.54
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'mile'){
        result.value = (input.value) 
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'centimeter'){
        result.value =  Number(input.value) * 160900
    }
        // yard

    if(inputTypeValue === 'yard' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) / 1094
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'meter'){
        result.value = Number(input.value) / 1.094
    }  else if(inputTypeValue === 'yard' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) * 914.4
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3
    }  else if(inputTypeValue === 'yard' && resultTypeValue === 'yard'){
        result.value = (input.value) 
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 36
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 1760
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'centimeter'){
        result.value =  Number(input.value) * 91.44
    }

    // Foot 

    if(inputTypeValue === 'foot' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) / 3281
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'meter'){
        result.value = Number(input.value) / 3.281
    }  else if(inputTypeValue === 'foot' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) /304.8
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'foot'){
        result.value = (input.value)
    }  else if(inputTypeValue === 'foot' && resultTypeValue === 'yard'){
        result.value = Number(input.value) / 3
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 12
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 5280
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'centimeter'){
        result.value =  Number(input.value) * 30.48
    }

    // Inch

    if(inputTypeValue === 'inch' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) / 39370
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'meter'){
        result.value = Number(input.value) / 39.37
    }  else if(inputTypeValue === 'inch' && resultTypeValue === 'milemeter'){
        result.value = Number(input.value) * 25.4
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'foot'){
        result.value = Number(input.value) / 12
    }  else if(inputTypeValue === 'inch' && resultTypeValue === 'yard'){
        result.value = Number(input.value) / 36
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'inch'){
        result.value = (input.value) 
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'mile'){
        result.value = Number(input.value) / 63360
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'centimeter'){
        result.value =  Number(input.value) * 2.54  
    }
}