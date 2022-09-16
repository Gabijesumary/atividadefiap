for (let x: number = 1; x <= 10; x++){
    console.log(`Tabuada do ${x}`);
    for (let y: number = 1; y <= 10; y++){
        console.log(`${x} X ${y} = ${x*y}`);
    }
}

/** 
 CEP: /^[0-9]{5}\-[0-9]{3}$/
 E-MAIL: /^[a-z0-9._]+@[a-z0-9._]\.([a-z]+)?$/i
 CPF: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
 CNPJ: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/
 RG: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/

Expressão regular extra
/^[0-9]{3,4}\.[0-9]{3}\.[a-z]{3}\.[a-z]{3}$/i
 */