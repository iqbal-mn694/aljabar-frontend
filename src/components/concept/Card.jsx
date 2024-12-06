import CardItem from "./CardItem";

function Cart() {
  const cardFeature = [
    {
      "title" : "Liveness",
      "description": "Liveness dalam musik adalah kualitas yang menggambarkan keaslian dan kehidupan dari pengalaman mendengarkan musik secara langsung, di mana elemen spontanitas, interaksi antara musisi dan audiens, serta atmosfer unik dari pertunjukan langsung menjadi ciri utamanya."
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