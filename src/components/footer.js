function Footer() {
  const hour = new Date().getHours(); // getHours renders a number between 0 - 23
  const openHour = 12;
  const closeHour = 2;

  let isOpen;

  if (openHour < closeHour) {
    // Normal durum: Açılış ve kapanış saatleri aynı gün içinde
    isOpen = hour >= openHour && hour < closeHour;
    /* eğer açılış saati, kapanış saatinden küçükse yani mesela 12 de açılıp 23'de kapatıyorsak, 
      saatimizin açılış saatinden büyük ya da eşit olması veya saatimizin kapanış saatinden önce olması Restoranın açık olduğunu gösterir
      */
  } else {
    // Gece yarısını geçen durum: Açılış ve kapanış saatleri farklı günlerde
    // eğer kapanış saati daha küçükse mesela 12 de açıp 2 de kapatıyorsak; saatimizin açılış saatinden yine büyük olması veya
    // kapanış saatinden küçük olması lazım ki restoran açık olabilsin.
    isOpen = hour >= openHour || hour < closeHour;
  }

  if (isOpen) {
    console.log("we are currently open! :)");
  } else {
    console.log("Sorry, we are closed :(");
  }
  return (
    <footer>{new Date().toLocaleTimeString()} We are currently open!</footer>
  );
}

export default Footer;
