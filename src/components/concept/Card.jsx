import CardItem from "./CardItem";

function Cart() {
  const cardFeature = [
    {
      "title" : "BPM (Beats Per Minute)",
      "description": "BPM atau biasa dikenal tempo yaitu kecepatan irama dari sebuah lagu. BPM menentukan karakteristik sebuah lagu. Biasanya tempo cepat mencerminkan lagu yang bersemangat dan riang. Begitupun sebaliknya tempo lambat mencerminkan lagu yang khidmat atau sedih."
    },
    {
      "title" : "Danceability",
      "description": "Danceability yaitu ukuran untuk menentukan kecocokan sebuah lagu untuk menari. Biasanya berada pada rentang 0 hingga 1. Jika nilainya dekat dengan 0 maka lagu sulit digunakan untuk menari. Jika nilainya dekat dengan 1 maka lagu mudah dan menyenangkan untuk digunakan menari."
    },
    {
      "title" : "Energy",
      "description": "Energy yaitu kekuatan sebuah lagu untuk mempengaruhi emosi dan suasana hati seseorang melalui nada, ritme dan liriknya."
    },
  ];

  return (
    <>
      <div class="feature-breakdown">
      {cardFeature.map((card, index) => (    
        <CardItem title={card.title} description={card.description} />
      ))}
      </div>
    </>
  )
}

export default Cart;