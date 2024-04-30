import React, { useEffect, useState } from "react";
import { initGA, logPageView } from "./ga";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import image1 from "./images/yuool.png";
import image2 from "./images/mercado_diferente.png";
import image3 from "./images/insider.png";
import image4 from "./images/ze.png";
import image5 from "./images/zee-now.png";
import image6 from "./images/cornershop.png";
import image7 from "./images/zee-dog.png";
import image8 from "./images/petlove-plano.png";
import image9 from "./images/recarga-pay.png";
import image10 from "./images/99-viagem.png";
import image11 from "./images/99-motorista.png";
import image12 from "./images/woba.png";
import image13 from "./images/daki.png";
import image14 from "./images/uber.png";
import image15 from "./images/petlove.png";

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    {
      name: "Cupom Yuool",
      logo: image1,
      discount: "15% de desconto Primeira Compra",
      couponCode: "AFA355FFAE",
      link: "https://www.yuool.com.br/?referrer_token=eRapyM",
    },
    {
      name: "Cupom Mercado Diferente",
      logo: image2,
      discount: "15% de desconto Primeira Compra na primeira cesta",
      couponCode: "",
      link: "https://mercdif.me/matheus-nunes-puppe",
    },
    {
      name: "Cupom Petlove",
      logo: image15,
      discount: "Ganhe R$20 em compras acima de R$100 na primeira compra",
      couponCode: "@MAT417915",
      link: "https://www.petlove.com.br/?coupon=@MAT417915",
    },
    {
      name: "Cupom Daki",
      logo: image13,
      discount: "R$50 desconto primeiro pedido",
      couponCode: "MP739028",
      link: "https://soudaki.onelink.me/FYIE/3nrc647q?deep_link_value=referalCode%2FTVA3MzkwMjg%3D",
    },
    {
      name: "Cupom Insider",
      logo: image3,
      discount: "R$30 OFF em compras acima de R$150",
      couponCode: "",
      link: "https://www.insiderstore.com.br/a/rewards/r/rx1mc3Fv",
    },
    {
      name: "Cupom Zé Delivery",
      logo: image4,
      discount: "Cupom de R$10 na primeira compra",
      couponCode: "MAPUPPJYG",
      link: "https://ze.sng.link/Dm9m7/5q7i/r_07d9c4b7a3",
    },
    {
      name: "Cupom Zee.now",
      logo: image5,
      discount: "ganhe R$25 de desconto",
      couponCode: "JJOASW",
      link: "https://zeenow.app.link/FFtaECeYh4",
    },
    {
      name: "Cupom Klin",
      logo: "https://www.socialsoul.com.vc/programas/BR/8997/logo_185x140.png",
      discount: "48 horas de frete grátis",
      couponCode: "",
      link: "https://compre.vc/v2/121c3b83475",
    },
    {
      name: "Cupom Basico.com",
      logo: "https://www.socialsoul.com.vc/programas/BR/5887/logo_185x140.png",
      discount: "Frete Grátis na primeira compra",
      couponCode: "",
      link: "https://compre.vc/v2/12185a97324",
    },
    {
      "name": "Home is...",
      "logo": "https://www.lomadee.com/programas/BR/6450/logo_185x140.png",
      "discount": "FRETE GR\u00c1TIS (CAPITAIS) A PARTIR DE R$150 EM TODO SITE",
      "couponCode": "URL CUPONADA",
      "link": "https://oferta.vc/v2/121df6c9381"
    },
    {
        "name": "Divinalu",
        "logo": "https://www.lomadee.com/programas/BR/7004/logo_185x140.png",
        "discount": "Frete gr\u00e1tis em compras acima de R$ 250,00 em toda a LOJA",
        "couponCode": "URL CUPONADA",
        "link": "https://oferta.vc/v2/121497c05f0"
    },
    {
        "name": "Ano Zero",
        "logo": "https://www.lomadee.com/programas/BR/7849/logo_185x140.png",
        "discount": "5% de desconto na Ano Zero",
        "couponCode": "GANHOU5",
        "link": "https://oferta.vc/v2/121a7267095"
    },
    {
        "name": "Wondershare",
        "logo": "https://www.lomadee.com/programas/BR/6924/logo_185x140.png",
        "discount": "20% off for Wondershare PDFelement 8",
        "couponCode": "SAFWSPDF",
        "link": "https://oferta.vc/v2/121e651e8f6"
    },
    {
        "name": "Bendita Seja",
        "logo": "https://www.lomadee.com/programas/BR/7414/logo_185x140.png",
        "discount": "10%Off na primeira compra",
        "couponCode": "BEMVINDO10",
        "link": "https://oferta.vc/v2/1219172af07"
    },
    {
        "name": "Home is... 2",
        "logo": "https://www.lomadee.com/programas/BR/6450/logo_185x140.png",
        "discount": "10% OFF NA PRIMEIRA COMPRA",
        "couponCode": "BOASVINDAS",
        "link": "https://oferta.vc/v2/121df6c9381"
    },
    {
        "name": "Besni",
        "logo": "https://www.lomadee.com/programas/BR/8594/logo_185x140.png",
        "discount": "10% de desconto na primeira compra",
        "couponCode": "PRIMEIRACOMPRA10",
        "link": "https://oferta.vc/v2/121290e141c"
    },
    {
        "name": "Home is... 3",
        "logo": "https://www.lomadee.com/programas/BR/6450/logo_185x140.png",
        "discount": "5% DE DESCONTO NO PIX OU BOLETO",
        "couponCode": "URL CUPONADA",
        "link": "https://oferta.vc/v2/1219c49f8c8"
    },
    {
        "name": "Anjuss",
        "logo": "https://www.lomadee.com/programas/BR/6829/logo_185x140.png",
        "discount": "10%OFF exclusivo Social Soul",
        "couponCode": "SOUL10",
        "link": "https://oferta.vc/v2/1212efcd48b"
    },
    {
        "name": "Vivavinho",
        "logo": "https://www.lomadee.com/programas/BR/8308/logo_185x140.png",
        "discount": "BemVindo10 Lomadee",
        "couponCode": "BemVindo10",
        "link": "https://oferta.vc/v2/121f712badb"
    },
    {
        "name": "Probel",
        "logo": "https://www.lomadee.com/programas/BR/8590/logo_185x140.png",
        "discount": "10% de desconto para todo o site",
        "couponCode": "socialsoul10",
        "link": "https://oferta.vc/v2/121f5925409"
    },
    {
        "name": "Anjuss 2",
        "logo": "https://www.lomadee.com/programas/BR/6829/logo_185x140.png",
        "discount": "10%off Apenas para a primeira compra",
        "couponCode": "AMOANJUSS10",
        "link": "https://oferta.vc/v2/1212efcd48b"
    },
    {
        "name": "Rovitex",
        "logo": "https://www.lomadee.com/programas/BR/7424/logo_185x140.png",
        "discount": "10% OFF somente para 1\u00aa compra.",
        "couponCode": "SOUL10",
        "link": "https://oferta.vc/v2/121944222ab"
    },
    {
        "name": "Cervejabox",
        "logo": "https://www.lomadee.com/programas/BR/8340/logo_185x140.png",
        "discount": "SOCIALSOUL10",
        "couponCode": "SOCIALSOUL10",
        "link": "https://oferta.vc/v2/121dd31d7cf"
    },
    {
        "name": "Cervejabox 2",
        "logo": "https://www.lomadee.com/programas/BR/8340/logo_185x140.png",
        "discount": "SOCIAL25OFF",
        "couponCode": "SOCIAL25OFF",
        "link": "https://oferta.vc/v2/1218147db19"
    },
    {
        "name": "Cervejabox 3",
        "logo": "https://www.lomadee.com/programas/BR/8340/logo_185x140.png",
        "discount": "SOCIALSOUL50",
        "couponCode": "SOCIALSOUL50",
        "link": "https://oferta.vc/v2/12154487033"
    },
    {
        "name": "Cervejabox 4",
        "logo": "https://www.lomadee.com/programas/BR/8340/logo_185x140.png",
        "discount": "SOCIALSOUL50OFF",
        "couponCode": "SOCIALSOUL50OFF",
        "link": "https://oferta.vc/v2/1218e8abe90"
    },
    {
        "name": "Cervejabox 5",
        "logo": "https://www.lomadee.com/programas/BR/8340/logo_185x140.png",
        "discount": "SOCIALSOUL33",
        "couponCode": "SOCIALSOUL33",
        "link": "https://oferta.vc/v2/1218e8abe90"
    },
    {
        "name": "Cervejabox 6",
        "logo": "https://www.lomadee.com/programas/BR/8340/logo_185x140.png",
        "discount": "SOCIALSOUL33OFF",
        "couponCode": "SOCIALSOUL33OFF",
        "link": "https://oferta.vc/v2/12154487033"
    },
    {
        "name": "allever",
        "logo": "https://www.lomadee.com/programas/BR/8811/logo_185x140.png",
        "discount": "5% de desconto na PRIMEIRA COMPRA na allever.com",
        "couponCode": "HELLO",
        "link": "https://oferta.vc/v2/121d3b30b25"
    },
    {
        "name": "Artcoco J\u00f3ias",
        "logo": "https://www.lomadee.com/programas/BR/8834/logo_185x140.png",
        "discount": "Primeira Compra",
        "couponCode": "PRIMEIRA10",
        "link": "https://oferta.vc/v2/121e8ce3582"
    },
    {
        "name": "Loj\u00e3o dos Esportes",
        "logo": "https://www.lomadee.com/programas/BR/8797/logo_185x140.png",
        "discount": "7% de desconto em toda loja!",
        "couponCode": "DESCONTO7",
        "link": "https://oferta.vc/v2/1216f2529b0"
    },
    {
        "name": "Inspire Home",
        "logo": "https://www.lomadee.com/programas/BR/8831/logo_185x140.png",
        "discount": "SSOUL3",
        "couponCode": "SSOUL3",
        "link": "https://oferta.vc/v2/121f84185ed"
    },
    {
        "name": "Casa da Sogra Enxovais",
        "logo": "https://www.lomadee.com/programas/BR/8858/logo_185x140.png",
        "discount": "10% de desconto na primeira compra",
        "couponCode": "PRIMEIRACOMPRA",
        "link": "https://oferta.vc/v2/1219437adde"
    },
    {
        "name": "Clubegl - Perfume Gusttavo Lima",
        "logo": "https://www.lomadee.com/programas/BR/8904/logo_185x140.png",
        "discount": "10% de desconto em PROD./CATEG. na LOJA",
        "couponCode": "SOCIAL10",
        "link": "https://oferta.vc/v2/1211ff38861"
    },
    {
        "name": "Niazi",
        "logo": "https://www.lomadee.com/programas/BR/8305/logo_185x140.png",
        "discount": "5% de desconto cupom de primeira compra no site",
        "couponCode": "SOCIAL5",
        "link": "https://oferta.vc/v2/1216d894b8d"
    },
    {
        "name": "Kappesberg",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "10%  de DESCONTO em Toda a COZINHA NOX - KAPPESBERG",
        "couponCode": "MEUCUPOMNOX",
        "link": "https://oferta.vc/v2/12198b9aa82"
    },
    {
        "name": "Kappesberg 2",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "8% de DESCONTO em Toda a LINHA INDUSTRIAL - KAPPESBERG",
        "couponCode": "MEUCUPOMIND",
        "link": "https://oferta.vc/v2/1216ca94707"
    },
    {
        "name": "Herbia Cosm\u00e9ticos Org\u00e2nicos",
        "logo": "https://www.lomadee.com/programas/BR/6943/logo_185x140.png",
        "discount": "10% de desconto na primeira compra",
        "couponCode": "SocialSoulPrimeiraCompra",
        "link": "https://oferta.vc/v2/121577aea7b"
    },
    {
        "name": "Skeptic",
        "logo": "https://www.lomadee.com/programas/BR/8562/logo_185x140.png",
        "discount": "Cupom de 10% para todas as compras no site",
        "couponCode": "SOCIALSOUL10",
        "link": "https://oferta.vc/v2/1216981b977"
    },
    {
        "name": "Serall\u00ea Cal\u00e7ados",
        "logo": "https://www.lomadee.com/programas/BR/8742/logo_185x140.png",
        "discount": "10% de desconto para primeira compra",
        "couponCode": "BEMVINDO10",
        "link": "https://oferta.vc/v2/121a931ef0c"
    },
    {
        "name": "Besni 2",
        "logo": "https://www.lomadee.com/programas/BR/8594/logo_185x140.png",
        "discount": "R$ 20,00 OFF Para clientes com  cart\u00e3o besni que nunca compraram no site. Compras acima de R$150,00",
        "couponCode": "CARTAOBESNI",
        "link": "https://oferta.vc/v2/121290e141c"
    },
    {
        "name": "Besni 3",
        "logo": "https://www.lomadee.com/programas/BR/8594/logo_185x140.png",
        "discount": "R$20,00 OFF em compras acima de R$150 na loja BESNI",
        "couponCode": "CUPOM20",
        "link": "https://oferta.vc/v2/121290e141c"
    },
    {
        "name": "Besni 4",
        "logo": "https://www.lomadee.com/programas/BR/8594/logo_185x140.png",
        "discount": "R$30,00 OFF em compras acima de R$250 na loja BESNI",
        "couponCode": "CUPOM30",
        "link": "https://oferta.vc/v2/121290e141c"
    },
    {
        "name": "Besni 5",
        "logo": "https://www.lomadee.com/programas/BR/8594/logo_185x140.png",
        "discount": "R$40,00 OFF em compras acima de R$350 na loja BESNI",
        "couponCode": "CUPOM40",
        "link": "https://oferta.vc/v2/121290e141c"
    },
    {
        "name": "Kappesberg 3",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "CUPOM: MEUJANTAR \u2013 8% DE DESCONTO EM SALAS DE JANTAR",
        "couponCode": "MEUJANTAR",
        "link": "https://oferta.vc/v2/1211475b9c4"
    },
    {
        "name": "Kappesberg 4",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "CUPOM: MEUESC \u2013 7% DE DESCONTO EM ITENS DE ESCRIT\u00d3RIO",
        "couponCode": "MEUESC",
        "link": "https://oferta.vc/v2/121435a0d31"
    },
    {
        "name": "Kappesberg 5",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "CUPOM: COZINHAOITO \u2013 8% DE DESCONTO COZINHAS SUPREMA, GEOMETRIC E CELESTE",
        "couponCode": "COZINHAOITO",
        "link": "https://oferta.vc/v2/1213010cfcf"
    },
    {
        "name": "Kappesberg 6",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "CUPOM: ROLL10 \u2013 10% DE DESCONTO EM COLCH\u00d5ES DA LINHA ROLL",
        "couponCode": "ROLL10",
        "link": "https://oferta.vc/v2/121d89f34ba"
    },
    {
        "name": "Kappesberg 7",
        "logo": "https://www.lomadee.com/programas/BR/8715/logo_185x140.png",
        "discount": "CUPOM: MDF8 \u2013 8% DE DESCONTO EM GUARDA-ROUPAS 100% MDF",
        "couponCode": "MDF8",
        "link": "https://oferta.vc/v2/12162888172"
    },
    {
        "name": "Leo Madeiras",
        "logo": "https://www.lomadee.com/programas/BR/8545/logo_185x140.png",
        "discount": "10% de desconto v\u00e1lido para todo o site, n\u00e3o cumulativo com outros descontos",
        "couponCode": "VOLTA10",
        "link": "https://oferta.vc/v2/12197d3219d"
    },
    {
        "name": "Fitmoda",
        "logo": "https://www.lomadee.com/programas/BR/8945/logo_185x140.png",
        "discount": "10% de Desconto em toda loja",
        "couponCode": "SOCIAL10",
        "link": "https://oferta.vc/v2/121a7a469da"
    },
    {
        "name": "Estuda.com",
        "logo": "https://www.lomadee.com/programas/BR/7393/logo_185x140.png",
        "discount": "10% OFF em Planos Mensais no Estuda.com",
        "couponCode": "socialsoul10",
        "link": "https://oferta.vc/v2/12190b85de8"
    },
    {
        "name": "Estuda.com 2",
        "logo": "https://www.lomadee.com/programas/BR/7393/logo_185x140.png",
        "discount": "20% OFF em Planos Anuais no Estuda.com",
        "couponCode": "socialsoul20",
        "link": "https://oferta.vc/v2/12190b85de8"
    },
    {
        "name": "Farmacam",
        "logo": "https://www.lomadee.com/programas/BR/8495/logo_185x140.png",
        "discount": "14% de desconto na primeira compra",
        "couponCode": "farmacam001",
        "link": "https://oferta.vc/v2/121fd800071"
    },
    {
        "name": "Farmacam 2",
        "logo": "https://www.lomadee.com/programas/BR/8495/logo_185x140.png",
        "discount": "10% de desconto",
        "couponCode": "aproveita10",
        "link": "https://oferta.vc/v2/121fd800071"
    },
    {
        "name": "Revest Acabamentos",
        "logo": "https://www.lomadee.com/programas/BR/8885/logo_185x140.png",
        "discount": "5% de desconto em TODA LOJA",
        "couponCode": "CHEGUEIREVEST",
        "link": "https://oferta.vc/v2/121f55cb19a"
    },
    {
        "name": "Lauri Esporte",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% De Desconto em Produtos da Columbia",
        "couponCode": "COLUMBIA10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 2",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos On Running",
        "couponCode": "ONNOTA10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 3",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos Asics",
        "couponCode": "ASICS10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 4",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos New Balance",
        "couponCode": "NB77845",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 5",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos Salomon",
        "couponCode": "SALOMON10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 6",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos Nike",
        "couponCode": "NIKENOTA10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 7",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos Adidas",
        "couponCode": "ADIDASNOTA10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 8",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto na Primeira Compra na Lauri Esporte",
        "couponCode": "LAURINOTA10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Lauri Esporte 9",
        "logo": "https://www.lomadee.com/programas/BR/7541/logo_185x140.png",
        "discount": "10% de Desconto em Produtos Skechers",
        "couponCode": "SKECHERSNOTA10",
        "link": "https://oferta.vc/v2/12105904d43"
    },
    {
        "name": "Pop Me",
        "logo": "https://www.lomadee.com/programas/BR/7163/logo_185x140.png",
        "discount": "10% OFF em Primeira Compra na loja Pop Me",
        "couponCode": "PRIMEIRACOMPRA",
        "link": "https://oferta.vc/v2/1218b55847f"
    },
    {
        "name": "Serall\u00ea Cal\u00e7ados 2",
        "logo": "https://www.lomadee.com/programas/BR/8742/logo_185x140.png",
        "discount": "QUERODM",
        "couponCode": "QUERODM",
        "link": "https://oferta.vc/v2/1217df67ef0"
    },
    {
        "name": "Nobelpack",
        "logo": "https://www.lomadee.com/programas/BR/8769/logo_185x140.png",
        "discount": "10% de desconto nas compras a partir de R$799 direto no site",
        "couponCode": "CONSUMIDOR10",
        "link": "https://oferta.vc/v2/12165ff5978"
    },
    {
        "name": "Pop Me 2",
        "logo": "https://www.lomadee.com/programas/BR/7163/logo_185x140.png",
        "discount": "PRIMEIRACOMPRA",
        "couponCode": "PRIMEIRACOMPRA",
        "link": "https://oferta.vc/v2/1218b55847f"
    },
    {
        "name": "Mais Mu",
        "logo": "https://www.lomadee.com/programas/BR/8061/logo_185x140.png",
        "discount": "10% OFF em Todo Site da Mais Mu",
        "couponCode": "SOCIALSOUL",
        "link": "https://oferta.vc/v2/12112934d79"
    },
    {
        "name": "ESET",
        "logo": "https://www.lomadee.com/programas/BR/8912/logo_185x140.png",
        "discount": "15% de desconto no ESET Home Security Essential e ESET Home Security Premium",
        "couponCode": "ESET2024",
        "link": "https://oferta.vc/v2/12141f7c5cf"
    },
    {
        "name": "Di Santinni",
        "logo": "https://www.lomadee.com/programas/BR/8293/logo_185x140.png",
        "discount": "5% OFF em Produtos na loja Di Santinni",
        "couponCode": "SS5DS",
        "link": "https://oferta.vc/v2/1210d2347a0"
    },
    {
        "name": "Pop Me 3",
        "logo": "https://www.lomadee.com/programas/BR/7163/logo_185x140.png",
        "discount": "POPMELOVERS",
        "couponCode": "POPMELOVERS",
        "link": "https://oferta.vc/v2/1216299d868"
    },
    {
        "name": "Enxovais Ibitinga",
        "logo": "https://www.lomadee.com/programas/BR/8349/logo_185x140.png",
        "discount": "10% OFF em Produtos Selecionados na Enxovais Ibitinga",
        "couponCode": "OUTONO24",
        "link": "https://oferta.vc/v2/121e97623ed"
    },
    {
        "name": "Maxco Store",
        "logo": "https://www.lomadee.com/programas/BR/8948/logo_185x140.png",
        "discount": "5% de desconto para primeira compra",
        "couponCode": "5OFF",
        "link": "https://oferta.vc/v2/12121b52035"
    },
    {
        "name": "Enxovais Ibitinga 2",
        "logo": "https://www.lomadee.com/programas/BR/8349/logo_185x140.png",
        "discount": "15% OFF em Todo o Site na Enxovais Ibitinga",
        "couponCode": "MAE24",
        "link": "https://oferta.vc/v2/12132fe5aad"
    },
    {
        "name": "Everlux Store",
        "logo": "https://www.lomadee.com/programas/BR/7667/logo_185x140.png",
        "discount": "5% de desconto para todos os produtos da loja Everlux",
        "couponCode": "SOCIAL05ABR24",
        "link": "https://oferta.vc/v2/121c67f5ce1"
    },
    {
        "name": "Qualidoc",
        "logo": "https://www.lomadee.com/programas/BR/8958/logo_185x140.png",
        "discount": "R$ 15,00 de desconto em compras acima de R$ 200,00 no Site e App.",
        "couponCode": "#QUALIDOC15",
        "link": "https://oferta.vc/v2/1211929209b"
    },
    {
        "name": "Home is... 4",
        "logo": "https://www.lomadee.com/programas/BR/6450/logo_185x140.png",
        "discount": "DIA DAS M\u00c3ES AT\u00c9 50% OFF",
        "couponCode": "URL CUPONADA",
        "link": "https://oferta.vc/v2/121214832a5"
    },
    {
        "name": "Infinix",
        "logo": "https://www.lomadee.com/programas/BR/8223/logo_185x140.png",
        "discount": "$200,00 OFF no Smartphone Note 30 5G Azul e Preto na Infinix",
        "couponCode": "INFINIX200",
        "link": "https://oferta.vc/v2/121a134dd0a"
    },
    {
        "name": "Infinix 2",
        "logo": "https://www.lomadee.com/programas/BR/8223/logo_185x140.png",
        "discount": "At\u00e9 35% OFF no Pix para Produtos Selecionados na Infinix",
        "couponCode": "DESTRAVA",
        "link": "https://oferta.vc/v2/121532de0ed"
    },
    {
        "name": "Shopclub",
        "logo": "https://www.lomadee.com/programas/BR/6575/logo_185x140.png",
        "discount": "5% OFF em Produtos Selecionados para aproveitar descontos de at\u00e9 30% + cupom de desconto.",
        "couponCode": "GANHE5",
        "link": "https://oferta.vc/v2/12196af2285"
    },
    {
        "name": "Nobelpack 2",
        "logo": "https://www.lomadee.com/programas/BR/8769/logo_185x140.png",
        "discount": "Nas compras a partir de R$ 799 direto no site ganhe 10% de desconto Insira o cupom MAE10 ao finalizar sua compra na p\u00e1gina do carrinho na op\u00e7\u00e3o \"adicionar cupom de desconto",
        "couponCode": "MAE10",
        "link": "https://oferta.vc/v2/12165ff5978"
    },
    {
        "name": "Nobelpack 3",
        "logo": "https://www.lomadee.com/programas/BR/8769/logo_185x140.png",
        "discount": "Nas compras a partir de R$ 799 direto no site ganhe 10% de desconto Insira o cupom RENOVA10 ao finalizar sua compra na p\u00e1gina do carrinho na op\u00e7\u00e3o \"adicionar cupom de desconto",
        "couponCode": "RENOVA10",
        "link": "https://oferta.vc/v2/12165ff5978"
    },
    {
        "name": "Simple Organic",
        "logo": "https://www.lomadee.com/programas/BR/8657/logo_185x140.png",
        "discount": "20% OFF em Produtos na Simple Organic",
        "couponCode": "HELLO",
        "link": "https://oferta.vc/v2/121005a23ac"
    },
    {
        "name": "Simple Organic 2",
        "logo": "https://www.lomadee.com/programas/BR/8657/logo_185x140.png",
        "discount": "R$30 OFF em Compras Acima de R$150 na Simple Organic",
        "couponCode": "PRIMEIRACOMPRA",
        "link": "https://oferta.vc/v2/121005a23ac"
    },
    {
        "name": "Simple Organic 3",
        "logo": "https://www.lomadee.com/programas/BR/8657/logo_185x140.png",
        "discount": "10% OFF em Produtos na Simple Organic",
        "couponCode": "QUEROSIMPLE",
        "link": "https://oferta.vc/v2/121005a23ac"
    },
    {
        "name": "Ortope",
        "logo": "https://www.lomadee.com/programas/BR/8398/logo_185x140.png",
        "discount": "10% OFF na Primeira Compra + 5% OFF no Pix - na Ortop\u00e9",
        "couponCode": "PRIMEIRACOMPRA10",
        "link": "https://oferta.vc/v2/121e3c4029d"
    },
    {
        "name": "Simple Organic 4",
        "logo": "https://www.lomadee.com/programas/BR/8657/logo_185x140.png",
        "discount": "Em compras de valores acima de R$279, Ganhe uma solu\u00e7\u00e3o POLI na Simple Organic",
        "couponCode": "BRINDEPOLI",
        "link": "https://oferta.vc/v2/121005a23ac"
    },
    {
        "name": "DR DOG cosm\u00e9ticos pet ",
        "logo": "https://www.lomadee.com/programas/BR/7098/logo_185x140.png",
        "discount": "5% off em Cuidado e Bem estar pet na Loja Dr. Dog",
        "couponCode": "SOCIAL5",
        "link": "https://oferta.vc/v2/1217624b228"
    },
    {
        "name": "DR DOG cosm\u00e9ticos pet  2",
        "logo": "https://www.lomadee.com/programas/BR/7098/logo_185x140.png",
        "discount": "10% OFF em Cuidado da pele e derme antipulgas do seu pet na loja Dr Dog",
        "couponCode": "MEUFILHOTE",
        "link": "https://oferta.vc/v2/1216ecdb84c"
    },
    {
        "name": "LIT",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Curso Finan\u00e7as para N\u00e3o Financeiros",
        "couponCode": "SSFPNF15",
        "link": "https://oferta.vc/v2/121d734c8d0"
    },
    {
        "name": "LIT 2",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Forma\u00e7\u00e3o no Mercado de Renda Fixa",
        "couponCode": "SSFMRF15",
        "link": "https://oferta.vc/v2/121d2250fe2"
    },
    {
        "name": "LIT 3",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Fundamentos de Data Science para Finan\u00e7as",
        "couponCode": "SSFDSF15",
        "link": "https://oferta.vc/v2/121883e1fb5"
    },
    {
        "name": "LIT 4",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Forma\u00e7\u00e3o para Mercado Financeiro - Operador/Banker",
        "couponCode": "SSFMFOB15",
        "link": "https://oferta.vc/v2/121615ae52e"
    },
    {
        "name": "LIT 5",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Fundamentos de ESG",
        "couponCode": "SSFESG15",
        "link": "https://oferta.vc/v2/12179beeca5"
    },
    {
        "name": "LIT 6",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | ChatGPT e as demais IAs Generativas",
        "couponCode": "SSGPT15",
        "link": "https://oferta.vc/v2/12135b17eca"
    },
    {
        "name": "LIT 7",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Forma\u00e7\u00e3o no Mercado de Derivativos Agr\u00edcolas",
        "couponCode": "SSFMDA15",
        "link": "https://oferta.vc/v2/1216401f69f"
    },
    {
        "name": "LIT 8",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Forma\u00e7\u00e3o de Profissionais em Mercados Derivativos",
        "couponCode": "SSFPMD15",
        "link": "https://oferta.vc/v2/121fd86191a"
    },
    {
        "name": "LIT 9",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Forma\u00e7\u00e3o de Controller",
        "couponCode": "SSFC15",
        "link": "https://oferta.vc/v2/1214227474d"
    },
    {
        "name": "LIT 10",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Investment Banking",
        "couponCode": "SSIB15",
        "link": "https://oferta.vc/v2/12154547ec6"
    },
    {
        "name": "LIT 11",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Valuation",
        "couponCode": "SSV15",
        "link": "https://oferta.vc/v2/121b1775d38"
    },
    {
        "name": "LIT 12",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "15% OFF | Lideran\u00e7a 5.0",
        "couponCode": "SSL15",
        "link": "https://oferta.vc/v2/121657b9478"
    },
    {
        "name": "Ef\u00e1cil",
        "logo": "https://www.lomadee.com/programas/BR/5779/logo_185x140.png",
        "discount": "20% OFF em Produtos Selecionados na Ef\u00e1cil",
        "couponCode": "BRINDE20",
        "link": "https://oferta.vc/v2/121185ddc41"
    },
    {
        "name": "Vaio",
        "logo": "https://www.lomadee.com/programas/BR/6126/logo_185x140.png",
        "discount": "At\u00e9 45% OFF em Ofertas + At\u00e9 R$100,00 OFF em Notebooks utilizando o cupom no site da VAIO.",
        "couponCode": "MAESVAIO",
        "link": "https://oferta.vc/v2/12186708b15"
    },
    {
        "name": "Hugart",
        "logo": "https://www.lomadee.com/programas/BR/8863/logo_185x140.png",
        "discount": "15% OFF para compras acima de R$350 no site da Hugart - CUPOM EXCLUSIVO PARA AFILIADOS DIVULGAREM",
        "couponCode": "DESCONTO15",
        "link": "https://oferta.vc/v2/1211cdef5e1"
    },
    {
        "name": "Girafa",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 150,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE150",
        "link": "https://oferta.vc/v2/1215e00dd40"
    },
    {
        "name": "Girafa 2",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 200,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE200",
        "link": "https://oferta.vc/v2/121e54f0d1e"
    },
    {
        "name": "Girafa 3",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 400,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE400",
        "link": "https://oferta.vc/v2/1219930f829"
    },
    {
        "name": "Girafa 4",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 600,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE600",
        "link": "https://oferta.vc/v2/1213c223822"
    },
    {
        "name": "Girafa 5",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 700,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE700",
        "link": "https://oferta.vc/v2/121e6bc2d30"
    },
    {
        "name": "Girafa 6",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 1000,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE1000",
        "link": "https://oferta.vc/v2/12139214acb"
    },
    {
        "name": "Girafa 7",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "R$ 1500,00  de desconto nos produtos selecionados no Girafa",
        "couponCode": "MOBILE1500",
        "link": "https://oferta.vc/v2/1218703561f"
    },
    {
        "name": "Webfones",
        "logo": "https://www.lomadee.com/programas/BR/8458/logo_185x140.png",
        "discount": "R$50,00 OFF na primeira compra - valores acima de R$1.200,00 no cart\u00e3o de cr\u00e9dito na Webfones",
        "couponCode": "PRIMEIRA50",
        "link": "https://oferta.vc/v2/12169144190"
    },
    {
        "name": "Inpower",
        "logo": "https://www.lomadee.com/programas/BR/8659/logo_185x140.png",
        "discount": "INP100",
        "couponCode": "INP100",
        "link": "https://oferta.vc/v2/121a90cdc01"
    },
    {
        "name": "Inpower 2",
        "logo": "https://www.lomadee.com/programas/BR/8659/logo_185x140.png",
        "discount": "INP50",
        "couponCode": "INP50",
        "link": "https://oferta.vc/v2/121d8ef8d9d"
    },
    {
        "name": "BioVittare",
        "logo": "https://www.lomadee.com/programas/BR/8572/logo_185x140.png",
        "discount": "10% OFF em Produtos Selecionados na BioVittare",
        "couponCode": "SUPER",
        "link": "https://oferta.vc/v2/1213bbc6f31"
    },
    {
        "name": "LIT 13",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Lideran\u00e7a Estrat\u00e9gica",
        "couponCode": "SSLE20",
        "link": "https://oferta.vc/v2/1210c04d105"
    },
    {
        "name": "LIT 14",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | An\u00e1lise de Viabilidade Econ\u00f4mica de Projetos de Investimentos",
        "couponCode": "SSAVEP20",
        "link": "https://oferta.vc/v2/121eb6b9d15"
    },
    {
        "name": "LIT 15",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | An\u00e1lise de Demonstrativos Financeiros",
        "couponCode": "SSADF20",
        "link": "https://oferta.vc/v2/121e95dd69c"
    },
    {
        "name": "LIT 16",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Mercado Financeiro - Vis\u00e3o Sist\u00eamica",
        "couponCode": "SSMFVS20",
        "link": "https://oferta.vc/v2/121ee9a96e2"
    },
    {
        "name": "LIT 17",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | T\u00e9cnicas de Negocia\u00e7\u00e3o",
        "couponCode": "SSTN20",
        "link": "https://oferta.vc/v2/1211f7ffe0b"
    },
    {
        "name": "LIT 18",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Derivativos - Risco, Derivativos Agropecu\u00e1rios, Volatilidade e Op\u00e7\u00f5es",
        "couponCode": "SSDRAVO20",
        "link": "https://oferta.vc/v2/121ea3065e2"
    },
    {
        "name": "LIT 19",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Relacionamento Interpessoal e Gest\u00e3o de Conflitos",
        "couponCode": "SSRIGC20",
        "link": "https://oferta.vc/v2/121edfbc533"
    },
    {
        "name": "LIT 20",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Contabilidade Fundamental",
        "couponCode": "SSCF20",
        "link": "https://oferta.vc/v2/121079b3fb1"
    },
    {
        "name": "LIT 21",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Planejamento e Or\u00e7amento",
        "couponCode": "SSPO20",
        "link": "https://oferta.vc/v2/121a1c0490b"
    },
    {
        "name": "LIT 22",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Capital de Giro e Gest\u00e3o de Fluxo de Caixa",
        "couponCode": "SSCGGFC20",
        "link": "https://oferta.vc/v2/12165e0e4b6"
    },
    {
        "name": "LIT 23",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Introdu\u00e7\u00e3o \u00e0 Intelig\u00eancia de Mercado",
        "couponCode": "SSIIM20",
        "link": "https://oferta.vc/v2/1212bebe4c2"
    },
    {
        "name": "LIT 24",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Matem\u00e1tica Financeira",
        "couponCode": "SSMF20",
        "link": "https://oferta.vc/v2/12107af8e80"
    },
    {
        "name": "LIT 25",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | T\u00e9cnicas de Apresenta\u00e7\u00e3o",
        "couponCode": "SSTA20",
        "link": "https://oferta.vc/v2/121ba8b4f33"
    },
    {
        "name": "LIT 26",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Criatividade, Inova\u00e7\u00e3o e Empreendedorismo",
        "couponCode": "SSCIE20",
        "link": "https://oferta.vc/v2/121274e36c5"
    },
    {
        "name": "LIT 27",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Planejamento Estrat\u00e9gico",
        "couponCode": "SSPE20",
        "link": "https://oferta.vc/v2/1217f9ba95f"
    },
    {
        "name": "LIT 28",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Marketing Estrat\u00e9gico",
        "couponCode": "SSME20",
        "link": "https://oferta.vc/v2/12147b09241"
    },
    {
        "name": "LIT 29",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Governan\u00e7a Corporativa, Compliance e \u00c9tica",
        "couponCode": "SSGCE20",
        "link": "https://oferta.vc/v2/121090da0b8"
    },
    {
        "name": "LIT 30",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Criptomoedas - Mercados, Bitcoins, Altcoins e Blockchain",
        "couponCode": "SSCMBB20",
        "link": "https://oferta.vc/v2/1217878c90f"
    },
    {
        "name": "LIT 31",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Business Intelligence - Estrat\u00e9gias, Ferramentas, Big Data e Analytics",
        "couponCode": "SSBIEFA20",
        "link": "https://oferta.vc/v2/121912c5202"
    },
    {
        "name": "LIT 32",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | M\u00e9todos Quantitativos Aplicados aos Neg\u00f3cios",
        "couponCode": "SSMQAN20",
        "link": "https://oferta.vc/v2/121d5583571"
    },
    {
        "name": "LIT 33",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Machine Learning e Data Science com Python",
        "couponCode": "SSMLDSP20",
        "link": "https://oferta.vc/v2/121d7faea60"
    },
    {
        "name": "LIT 34",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Fundamentos de Risco em Finan\u00e7as",
        "couponCode": "SSFRF20",
        "link": "https://oferta.vc/v2/12170a71547"
    },
    {
        "name": "LIT 35",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Fundamentos de Valuation",
        "couponCode": "SSFV20",
        "link": "https://oferta.vc/v2/121d3c6a73f"
    },
    {
        "name": "LIT 36",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | Mercado Financeiro - Intermedia\u00e7\u00e3o, Instrumentos e Novas Tecnologias",
        "couponCode": "SSMFII20",
        "link": "https://oferta.vc/v2/121f571a9ca"
    },
    {
        "name": "LIT 37",
        "logo": "https://www.lomadee.com/programas/BR/7921/logo_185x140.png",
        "discount": "20% OFF | An\u00e1lise T\u00e9cnica",
        "couponCode": "SSATA20",
        "link": "https://oferta.vc/v2/1210594b18e"
    },
    {
        "name": "Ef\u00e1cil 2",
        "logo": "https://www.lomadee.com/programas/BR/5779/logo_185x140.png",
        "discount": "At\u00e9 50% OFF em Produtos Selecionados na Ef\u00e1cil",
        "couponCode": "COLGATE",
        "link": "https://oferta.vc/v2/12150be57a7"
    },
    {
        "name": "Girafa 8",
        "logo": "https://www.lomadee.com/programas/BR/5727/logo_185x140.png",
        "discount": "10% OFF nos Melhores Produtos Eletroport\u00e1teis no Girafa",
        "couponCode": "ESQUENTA10",
        "link": "https://oferta.vc/v2/121ef394cd1"
    },
    {
        "name": "Probel 2",
        "logo": "https://www.lomadee.com/programas/BR/8590/logo_185x140.png",
        "discount": "20% de desconto no site todo",
        "couponCode": "SOCIALSOUL20",
        "link": "https://oferta.vc/v2/121f5925409"
    },
    {
        "name": "Infinix 3",
        "logo": "https://www.lomadee.com/programas/BR/8223/logo_185x140.png",
        "discount": "R$150,00 OFF em um Smartphone INFINIX NOTE 30 na Infinix",
        "couponCode": "MAESINF150",
        "link": "https://oferta.vc/v2/1212d941e11"
    },
    {
        "name": "Moveis Carraro",
        "logo": "https://www.lomadee.com/programas/BR/8432/logo_185x140.png",
        "discount": "7OFF",
        "couponCode": "MEUCUPOM7",
        "link": "https://oferta.vc/v2/12140418a91"
    },
    {
        "name": "Montreal Moda e Casa",
        "logo": "https://www.lomadee.com/programas/BR/8962/logo_185x140.png",
        "discount": "BEM VINDO",
        "couponCode": "BEMVINDO10",
        "link": "https://oferta.vc/v2/121a43832c3"
    },
    {
        "name": "Montreal Moda e Casa 2",
        "logo": "https://www.lomadee.com/programas/BR/8962/logo_185x140.png",
        "discount": "DIA DAS M\u00c3ES",
        "couponCode": "MAE15",
        "link": "https://oferta.vc/v2/121f303c508"
    },
    {
        "name": "Nike",
        "logo": "https://www.lomadee.com/programas/BR/5901/logo_185x140.png",
        "discount": "20% OFF em Produtos Downshifter e Revolution na loja Nike",
        "couponCode": "CORRIDA20",
        "link": "https://oferta.vc/v2/121abf8c0b7"
    },
    {
        "name": "Moveis Carraro 2",
        "logo": "https://www.lomadee.com/programas/BR/8432/logo_185x140.png",
        "discount": "12% OFF em Cozinhas e Conjunto de Sala de Jantar na Moveis Carraro",
        "couponCode": "AMORLAR12",
        "link": "https://oferta.vc/v2/12166e6fc9b"
    },
    {
        "name": "Oi Place",
        "logo": "https://www.lomadee.com/programas/BR/8550/logo_185x140.png",
        "discount": "10% OFF em Pranchas e Escovas de Cabelo na Oi Place",
        "couponCode": "MAES10",
        "link": "https://oferta.vc/v2/1214eddbe16"
    },
    {
        "name": "Hugart 2",
        "logo": "https://www.lomadee.com/programas/BR/8863/logo_185x140.png",
        "discount": "LIVEHUG - Cupom de Frete Gr\u00e1tis Para Todo o Brasil para compras acima de R$99 (Somente 10 unidades do cupom dispon\u00edveis para uso) - V\u00e1lido s\u00f3 at\u00e9 hoje 30/04 as 23:59 - Cupom especial referente a live que fizemos no perfil da Hug hoje",
        "couponCode": "LIVEHUG",
        "link": "https://oferta.vc/v2/1218902cbd6"
    },
    {
        "name": "Hugart 3",
        "logo": "https://www.lomadee.com/programas/BR/8863/logo_185x140.png",
        "discount": "HUG100 - Cupom de R$100 de desconto v\u00e1lido para compras acima de R$599",
        "couponCode": "HUG100",
        "link": "https://oferta.vc/v2/1218902cbd6"
    },
    {
        "name": "Hugart 4",
        "logo": "https://www.lomadee.com/programas/BR/8863/logo_185x140.png",
        "discount": "HUG50 para R$50 de desconto nas compras acima de R$299",
        "couponCode": "HUG50",
        "link": "https://oferta.vc/v2/1218902cbd6"
    },
    {
        "name": "Hugart 5",
        "logo": "https://www.lomadee.com/programas/BR/8863/logo_185x140.png",
        "discount": "HUG25 para R$25 de desconto nas compras acima de R$299",
        "couponCode": "HUG25",
        "link": "https://oferta.vc/v2/1218902cbd6"
    },
    {
      name: "Cupom Cornershop",
      logo: image6,
      discount: "Frete Grátis e bônus de R$10 na primeira compra",
      couponCode: "",
      link: "https://corner.shop/r/6atd4nffm",
    },
    {
      name: "Cupom Zee Dog",
      logo: image7,
      discount:
        "15% de desconto para os amigos desavisados que nunca compraram na Zee.Dog",
      couponCode: "",
      link: "http://zeedog.refr.cc/matheusnunespuppe ",
    },
    {
      name: "Cupom Petlove Plano de saúde",
      logo: image8,
      discount: "20% OFF na 1ª mensalidade dos Planos de Saúde",
      couponCode: "",
      link: "https://saude.petlove.com.br/indicacao/laxi9ghpmmofhqew ",
    },
    {
      name: "Cupom Recarga Pay",
      logo: image9,
      discount:
        "Para ganhar R$20. É só baixar o App e fazer sua 1ª compra em Pix com qualquer cartão em até 12x",
      couponCode: "matpup024",
      link: "http://recargapay.com.br/r/matpup024-lO ",
    },
    {
      name: "Cupom 99",
      logo: image10,
      discount: "Desconto primeira viagem",
      couponCode: "",
      link: "https://d.99app.com/RUdWne2",
    },
    {
      name: "Cupom Uber",
      logo: image14,
      discount: "Economizar BRL25 nas 5 primeiras viagens.",
      couponCode: "x9aqpdda6pkz",
      link: "https://referrals.uber.com/refer?id=x9aqpdda6pkz",
    },
    {
      name: "Convite 99 motorista",
      logo: image11,
      discount: "Você foi convidado para ser motorista parceiro 99! ",
      couponCode: "",
      link: "https://d.99app.com/e1ByJVE",
    },
    {
      name: "Diária Woba",
      logo: image12,
      discount: "Você ganhou reserva grátis em qualquer espaço de coworking ",
      couponCode: "",
      link: "https://bnc.lt/woba-referral?rid=r43533",
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function showModal(company) {
    setSelectedCompany(company);
  }

  function closeModal() {
    setSelectedCompany(null);
  }

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="App">
      <header className="bg-primary py-4">
        <div className="container text-center">
          <h1 className="text-white">Bem vindo ao Cupom Vantagens</h1>
          <p className="lead text-white">
            O seu destino para economizar com cupons de desconto
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar empresa com cupom"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-success" type="button">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            {filteredCompanies.map((company) => (
              <div key={company.name} className="col-md-4 mb-4">
                <div className="card border-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title text-primary">{company.name}</h3>
                    <p className="card-text">{company.discount}</p>
                    <CopyToClipboard
                      text={company.couponCode}
                      onCopy={handleCopy}
                    >
                      <button
                        className="btn btn-primary"
                        onClick={() => showModal(company)}
                      >
                        Mostrar cupom <FaCopy className="ml-2" />
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedCompany && (
            <div className="coupon-modal">
              <div className="modal-content">
                <h3>{selectedCompany.name}</h3>
                <p>{selectedCompany.discount}</p>
                {selectedCompany.couponCode && (
                  <>
                    <p>Código Cupom: {selectedCompany.couponCode}</p>
                    <div className="text-center">
                      {copied && (
                        <div className="text-success mt-2">
                          Copiado para a área de transferência!
                        </div>
                      )}
                      <CopyToClipboard
                        text={selectedCompany.couponCode}
                        onCopy={handleCopy}
                      >
                        <button className="btn btn-primary">
                          Copiar código do cupom
                          <FaCopy className="ml-2" />
                        </button>
                      </CopyToClipboard>
                    </div>
                  </>
                )}
                {selectedCompany.link && (
                  <p>
                    Link:{" "}
                    <a
                      href={selectedCompany.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ir direto para o site!
                    </a>
                  </p>
                )}
                <div className="text-center">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
