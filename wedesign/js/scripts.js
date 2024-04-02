
// Menu Mobile

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
};

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};



// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

about_tags = document.getElementsByClassName("single-tab");

for (var a = 0; a < about_tags.length; a++) {

  about_tags[a].onclick = function (){

    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style['background-color'] = unselected_color;
      about_tags[b].style['font-weight'] = "normal";
    }

    this.style['background-color'] = selected_color;
    this.style['font-weight'] = "bold";

    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
    
  };
}


// Slider de serviços

var our_services = [
  {
    'title': 'Web Design',
    'text': 'Sites profissionais e personalizados para todos os tipos de negócios.<br> Design responsivo para otimizar a experiência em qualquer dispositivo.<br>SEO para aumentar a visibilidade do seu site nos mecanismos de busca.</p>'
  },

  {
    'title': 'Branding',
    'text': 'Criação de uma identidade visual forte e memorável.<br>Posicionamento estratégico da sua marca no mercado.<br>Desenvolvimento de materiais de comunicação impactantes.<br>'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Estratégias completas para atrair e converter mais clientes.<br>Criação de conteúdo envolvente e de alta qualidade.<br>Campanhas de anúncios otimizadas para alcançar o público certo.'
  }
  
];

var servico_atual = 0

  document.getElementById("service-previous").onclick = function() {
    if (servico_atual ==0){
      var servico_anterior = our_services.length -1;
    }else {
      servico_anterior = servico_atual -1;
    }
    
    document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
    document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;
    servico_atual = servico_anterior;

  };

  document.getElementById("service-next").onclick = function() {
    if (servico_atual == our_services.length -1){
      var servico_seguinte = 0;
    }else {
      servico_seguinte = servico_atual +1;
    }
    
    document.getElementById("service-title").innerHTML = our_services[servico_seguinte].title;
    document.getElementById("service-text").innerHTML = our_services[servico_seguinte].text;
    servico_atual = servico_seguinte;

  };




// Data Footer 

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById("current_year").innerHTML = ano_atual;
console.log(ano_atual);


// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -23.5675860, lng: -46.648090 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();


  //API Key AIzaSyBc162s0l9fq6Vt-wIFwTHwelqlOB3xKjE