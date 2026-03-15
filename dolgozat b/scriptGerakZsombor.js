const form = document.getElementById("form")
const nev = document.getElementById("nev")
const ev = document.getElementById("ev")
const honap = document.getElementById("honap")
const nap = document.getElementById("nap")
const adatok = document.getElementById("adatok")
const szam = document.getElementById("szam")
const csuszka = document.getElementById("csuszka")
const kt = document.getElementById("kt")
const sugar = document.getElementById("sugar")
const kep = document.getElementById("fenykep")
const checked = document.getElementById("checked")
const html = document.getElementById("HTML")
const css = document.getElementById("CSS")
const js = document.getElementById("JS")
const kiir = document.getElementById("kiir")

const dobozok = document.getElementsByName("box")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    adatok.innerHTML = `Név: ${nev.value}, Születési idő: ${Number(ev.value)}.${Number(honap.value)}.${Number(nap.value)}`
})

csuszka.addEventListener("input", ()=>{
    szam.innerHTML = Number(csuszka.value)
})

sugar.addEventListener("change", ()=>{
    let kerulet = 2*Number(sugar.value)*3.14
    let teruet = Math.pow(Number(sugar.value),2)*3.14
    kt.innerHTML = `Kerület: ${kerulet.toFixed(2)}cm, Terület: ${teruet.toFixed(2)}cm2`
})

document.querySelectorAll('button[name="kep"]').forEach(btn =>{
    btn.addEventListener("click", ()=>{
        
        if (Number(btn.value) === 1) {
            kep.src = "evszak.jpg"
        }
        if (Number(btn.value) === 2) {
            kep.src = ""
        }
    })
})

kiir.addEventListener("click", ()=>{
    let szoveg = ""
    document.querySelectorAll('input[type="checkbox"][name="box"]').forEach(box =>{
        if (box.checked) {
            szoveg = szoveg.concat(`${box.value}, `)
        }
    })
    checked.innerHTML = szoveg
})



kiir.addEventListener("click", ()=>{
    let ha = ""
    for (let index = 0; index < dobozok.length; index++) {
        if (dobozok[index].checked) {
            ha = ha.concat(`${dobozok[index].value}, `)  
        }
        
    }
    document.getElementById("xd").innerHTML=ha
})

