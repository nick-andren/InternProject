//tealium universal tag - utag.178 ut4.0.201502050126, Copyright 2015 Tealium.com Inc. All Rights Reserved.
if(typeof utag.ut=="undefined"){utag.ut={};}
utag.ut.libloader2=function(o,a,b,c,l){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=o.src;if(o.id){b.id=o.id};if(typeof o.cb=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;o.cb()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb()}}}
l=o.loc||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+o.src)}}
try{(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.initialized=false;u.data={};u.data.google_conversion_id="970565484";u.data.google_conversion_label="opMiCPzxwQkQ7M7mzgM";u.data.pagetype="other";u.data.value="";u.data.google_remarketing_only=true;u.data.base_url="//www.googleadservices.com/pagead/conversion_async.js";u.map={"page_category_name":"custom.PROD_Cat1","page_subcategory_name":"custom.PROD_Cat2","product_category_name":"custom.PROD_Cat1","product_subcategory_name":"custom.PROD_Cat2","product_manufacture":"custom.PROD_Brand","product_title":"custom.PROD_Name","product_sale_price":"custom.PROD_Price","site_currency":"custom.PROD_Currency","page_type":"custom.PROD_Action"};u.extend=[function(a,b){try{if(typeof b['trans_id']!='undefined'){b['page_type']='PURCHASED'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['page_name']=='ProductDetail'||b['page_name']=='ProductList'||b['page_name']=='ShellShocker'||b['page_name']=='DailyDeal'){b['page_type']='VIEW_DETAILS'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['page_name']=='ShoppingCart'){b['page_type']='ADD_CART'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};var c,d,e,f,g;g={};u.data.google_custom_params={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("custom.")==0){u.data.google_custom_params[e[f].substr(7)]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.google_conversion_id=parseInt(u.data.google_conversion_id);g.google_conversion_id=u.data.google_conversion_id;if(u.data.google_conversion_label){g.google_conversion_label=u.data.google_conversion_label;}
if(b._corder){u.data.pagetype="purchase";}
u.data.prod=u.data.prod||(typeof b._cprod!="undefined"?b._cprod.slice(0):[]);u.data.value=u.data.value||b._csubtotal;u.data.google_custom_params.VER='1.0';u.data.google_custom_params.ecomm_quantity=u.data.google_custom_params.ecomm_quantity||(b._cquan!==undefined?b._cquan.slice(0):[]);g.google_custom_params=u.data.google_custom_params;if(u.data.google_remarketing_only){g.google_remarketing_only=u.data.google_remarketing_only;}
u.gac_callback=function(){window.google_trackConversion(g);}
if(!u.initialized){u.initialized=true;utag.ut.libloader2({src:u.data.base_url,cb:u.gac_callback});}else{u.gac_callback();}}}
utag.o[loader].loader.LOAD(id);})('178','newegg.newegg.com');}catch(e){}
