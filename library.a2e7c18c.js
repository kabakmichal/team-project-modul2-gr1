!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire7e79;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire7e79=a);var o=a("bpxeT"),c=a("2TvXO");a("aZhHc"),a("cRUDO");var i=a("3Sjhd"),s=a("fPBaN");!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",(function(n){if("movie-card"===n.target.offsetParent.className){t();var r=n.target.offsetParent.dataset.id,a=JSON.parse(localStorage.getItem(l))[r];(0,i.modalSet)(a),e.modal.addEventListener("click",(function(e){"queue"===e.target.dataset.name&&(0,s.addToQueue)(a),"watched"===e.target.dataset.name&&(0,s.addToWatched)(a)}))}})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&t()})),e.closeModalBtn.addEventListener("click",(function(){i.movieModalBox.innerHTML="",t()}))}();var d,u=document.querySelector(".gallery"),l="",p=(d=e(o)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.innerHTML="",r=0,a=n.map((function(e){e.id;var t=e.media_type,n=e.poster_path,a=e.release_date,o=e.first_air_date,c=e.title,i=e.name,s=e.genres,d=a||o||"????";if("person"!==t)return'<div class="movie-card" data-id="'.concat(r++,'" data-type="').concat(t||"movie",'">\n      <img class="movie-card__img" src="https://image.tmdb.org/t/p/w500/').concat(n,'" onerror="this.src = \'https://picsum.photos/id/237/274/398\'";alt="image of movie" loading="lazy" />\n      <div class="movie-card__info">\n          <p class="movie-card__title">\n              <span>').concat(c||i,'</span>\n          </p>\n      <div class= "genreDate">\n          <p class="movie-card__genre">\n              <span>').concat(s.map((function(e){return e.name})).splice(0,2).join(", "),'</span>\n          </p>\n          <p class="movie-card__year">| ').concat(d.slice(0,4)||"","\n              <span></span>\n          </p>\n      </div>\n      </div>\n  </div>\n  ")})).join(""),e.abrupt("return",u.insertAdjacentHTML("beforeend",a));case 4:case"end":return e.stop()}}),t)}))),function(e){return d.apply(this,arguments)}),f=function(){var t=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(n=JSON.parse(localStorage.getItem("queue"))||[])){e.next=4;break}return e.abrupt("return");case 4:return l="queue",e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(n=JSON.parse(localStorage.getItem("watched"))||[])){e.next=4;break}return e.abrupt("return");case 4:return l="watched",e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),m={btnWatchedHeaderEl:document.querySelector(".header-watched"),btnQueueHeaderEl:document.querySelector(".header-queue")};m.btnWatchedHeaderEl.addEventListener("click",e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),t)})))),m.btnQueueHeaderEl.addEventListener("click",e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),t)}))))}();
//# sourceMappingURL=library.a2e7c18c.js.map
