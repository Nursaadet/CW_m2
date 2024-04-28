const Event = () => {
  //? Local degisken
  let message = "Hoş geldin FS16"

  //? Event handler fonksiyonun tanimlanmasi
  const handleTikla = (e) => {
    alert("tiklandi")
    console.log(e)
    console.log("ID:", e.target.id)
    console.log("NAME:", e.target.name)
  }

  function handleCikis(msg) {
    console.log(msg)
  }

  const handleMsgDegistir = function () {
    message = "Merhaba React Dostları"
    console.log(message)
  }
  //? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
  //? 1- Herhangi bir state degisirse
  //? 2- Props degisirse
  //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)
  return (
    <div>
      <h1>Events</h1>

      {/* Event */}
      <button onClick={handleTikla} id="btn" name="my-button">
        Tikla
      </button>

      {/* Eger bir event fonksiyonunun parametresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu, event gerceklesmeden cagirilir */}
      <button onClick={() => alert("Silindi")}>Sil</button>
      <button onClick={() => handleCikis(message)}>Cikis</button>

      <button onClick={handleMsgDegistir}>Degistir</button>

      <p>{message}</p>
    </div>
  )
}

export default Event

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
