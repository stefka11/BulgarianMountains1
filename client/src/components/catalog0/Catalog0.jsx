const callouts = [
    {
      title: 'МУСАЛА ',
      region: "РИЛА",
      opis:"Най-високият връх на Балканите",
      kota: "42.18 сш; 23.58 ид",
      img: "./images/Musala.jpg",
      description: 'Work from home accessories',
      _createdOn: 1615545143015,
      _id: "53d4dbf5-7f41-47ba-b485-43eccb91cb95"
    },
    {
      title: 'РИЛСКИ МАНАСТИР',
      region: "РИЛА",
      opis:"Св.Иван Рилски",
      kota: "42.13 сш; 23.34 ид",
      img: "./images/RilaManastir.jpg",
      description: 'Journals and note-taking',
      _createdOn: 1615545572296,
      _id: "f5929b5c-bca4-4026-8e6e-c09e73908f77"

    },
    {
      title: 'ВИХРЕН',
      region: "ПИРИН",
      opis:"Мраморният връх",
      kota: "41.77 сш; 23.40 ид",
      img: "./images/Vihren.jpg",
      description: 'Daily commute essentials',
      _createdOn: 1615546332126,
      _id: "c7f51805-242b-45ed-ae3e-80b68605141b"

    },
  ]

export default function Catalog0(){
    return (
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Колекция</h2>
    
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.title} className="group relative">
                    <img
                      src={callout.img}
                      className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                    />
       
                    <p className="text-base font-semibold text-gray-900">{callout.title} - {callout.opis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
}