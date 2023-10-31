(function(){"use strict";var t={4934:function(t,e,n){var o=n(9242),s=n(3396);const a={class:"wrapper"};function i(t,e,n,i,l,r){const c=(0,s.up)("Navbar"),d=(0,s.up)("NotesList"),h=(0,s.up)("AddNote"),u=(0,s.up)("ModalWindow");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(c,{onSetSearch:e[0]||(e[0]=t=>l.searchVal=t)}),(0,s.Wm)(d,{notes:r.filterNotes,onChange:r.change,onDelNote:r.delNote},null,8,["notes","onChange","onDelNote"]),(0,s.Wm)(h,{onClick:e[1]||(e[1]=t=>l.isModalOpen=!0)}),(0,s.wy)((0,s.Wm)(u,{onClose:e[2]||(e[2]=t=>(l.isModalOpen=!1,l.edit=!1)),onAddNote:r.addNote,edit:l.edit,onChangedNote:r.changedNote,editedNote:l.editedNote},null,8,["onAddNote","edit","onChangedNote","editedNote"]),[[o.F8,l.isModalOpen]])])}var l=n(7139),r=n.p+"img/search.2c9e71ed.svg",c=n.p+"img/back.014b4ff1.svg",d=n.p+"img/clear.1d4d165f.svg";const h={class:"header"},u={key:0,class:"header__nav"},_={class:"header__nav-title"},p=(0,s._)("img",{src:r,alt:""},null,-1),g=[p],v={key:1,class:"header__search"},m=(0,s._)("img",{src:c,alt:""},null,-1),f=[m],w=["placeholder"],N={class:"header__search-clear"};function b(t,e,n,a,i,r){return(0,s.wg)(),(0,s.iD)("header",h,[(0,s.Wm)(o.uT,{name:"header__notes",mode:"out-in"},{default:(0,s.w5)((()=>[i.header?((0,s.wg)(),(0,s.iD)("nav",u,[(0,s._)("button",{class:"header__nav-lang",onClick:e[0]||(e[0]=(...t)=>r.switchLang&&r.switchLang(...t))},(0,l.zw)(t.$i18n.locale),1),(0,s._)("h1",_,(0,l.zw)(t.$t("notes")),1),(0,s._)("button",{class:"header__nav-search",onClick:e[1]||(e[1]=t=>i.header=!1)},g)])):((0,s.wg)(),(0,s.iD)("nav",v,[(0,s._)("button",{class:"header__search-back",onClick:e[2]||(e[2]=t=>(i.header=!0,i.search=""))},f),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>i.search=t),class:"header__search-input",placeholder:t.$t("searchInput")},null,8,w),[[o.nr,i.search]]),(0,s._)("button",N,[(0,s._)("img",{src:d,alt:"",onClick:e[4]||(e[4]=t=>i.search="")})])]))])),_:1})])}var k={props:{},data(){return{header:!0,search:""}},watch:{search(t){this.$emit("setSearch",t)}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru"}}},C=n(89);const y=(0,C.Z)(k,[["render",b]]);var $=y,x=n.p+"img/list.4ed3d4be.svg",O=n.p+"img/grid.dbae4039.svg";const D={class:"notes"},z={class:"container"},M={class:"notes__top"},S={class:"notes__top-title"},j={key:0,src:x,alt:""},L={key:1,src:O,alt:""};function W(t,e,n,o,a,i){const r=(0,s.up)("NotesItem");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",z,[(0,s._)("div",M,[(0,s._)("h2",S,(0,l.zw)(n.notes.length>0?t.$t("allNotes"):t.$t("noNotes")),1),(0,s._)("button",{class:"notes__top-btn",onClick:e[0]||(e[0]=t=>a.view=!a.view)},[a.view?((0,s.wg)(),(0,s.iD)("img",j)):((0,s.wg)(),(0,s.iD)("img",L)),(0,s._)("span",null,(0,l.zw)(a.view?t.$t("list"):t.$t("grid")),1)])]),(0,s._)("div",{class:(0,l.C_)(["notes__list",{active:!a.view}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.notes,(e=>((0,s.wg)(),(0,s.j4)(r,{key:e.id,note:e,view:a.view,onChange:n=>t.$emit("change",e.id),onDelNote:n=>t.$emit("delNote",e.id)},null,8,["note","view","onChange","onDelNote"])))),128))],2)])])}var Z=n.p+"img/edit.092f5b23.svg",I=n.p+"img/del.f04c87ff.svg";const V={class:"notes__item"},A={class:"notes__item-top-title"},E={class:"notes__item-top-date"},T={class:"notes__item-text"},U={class:"notes__item-btns"},B=(0,s._)("img",{src:Z,alt:""},null,-1),J=(0,s._)("img",{src:I,alt:""},null,-1);function q(t,e,n,o,a,i){return(0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("div",{class:(0,l.C_)(["notes__item-top",{between:!n.view}])},[(0,s._)("h2",A,(0,l.zw)(n.note.title),1),(0,s._)("p",E,(0,l.zw)(n.note.date),1)],2),(0,s._)("p",T,(0,l.zw)(n.note.text),1),(0,s._)("div",U,[(0,s._)("button",{class:"notes__item-btns-btn edit",onClick:e[0]||(e[0]=e=>t.$emit("change",n.note.id))},[B,(0,s._)("span",null,(0,l.zw)(t.$t("edit")),1)]),(0,s._)("button",{class:"notes__item-btns-btn del",onClick:e[1]||(e[1]=e=>t.$emit("delNote",n.note.id))},[J,(0,s._)("span",null,(0,l.zw)(t.$t("del")),1)])])])}var R={props:{note:Object,view:Boolean}};const F=(0,C.Z)(R,[["render",q]]);var H=F,P={props:{notes:Array},components:{NotesItem:H},data(){return{view:!0}}};const Q=(0,C.Z)(P,[["render",W]]);var Y=Q;const G={class:"addNote"},K=(0,s._)("img",{src:Z,alt:""},null,-1),X=[K];function tt(t,e,n,o,a,i){return(0,s.wg)(),(0,s.iD)("button",G,X)}var et={};const nt=(0,C.Z)(et,[["render",tt]]);var ot=nt;const st={class:"modal__block-title"},at={class:"modal__block-inputs"},it=(0,s._)("span",null,"Title",-1),lt=(0,s._)("span",null,"Content",-1),rt={class:"modal__block-btns"};function ct(t,e,n,a,i,r){const c=(0,s.up)("bnt");return(0,s.wg)(),(0,s.iD)("div",{class:"modal",onClick:e[3]||(e[3]=(...t)=>r.closeModal&&r.closeModal(...t))},[(0,s._)("div",{class:"modal__block",onClick:e[2]||(e[2]=(0,o.iM)((()=>{}),["stop"]))},[(0,s._)("h2",st,(0,l.zw)(n.edit?t.$t("changeNote"):t.$t("addNote")),1),(0,s._)("div",at,[(0,s._)("label",null,[it,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.title=t)},null,512),[[o.nr,i.title]])]),(0,s._)("label",null,[lt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>i.text=t)},null,512),[[o.nr,i.text]])])]),(0,s._)("div",rt,[(0,s.Wm)(c,{class:"modal__block-btns-btn del",onClick:r.closeModal},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("cansel")),1)])),_:1},8,["onClick"]),n.edit?((0,s.wg)(),(0,s.j4)(c,{key:1,class:"modal__block-btns-btn edit",onClick:r.changeNote},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("change")),1)])),_:1},8,["onClick"])):((0,s.wg)(),(0,s.j4)(c,{key:0,class:"modal__block-btns-btn edit",onClick:r.addNote},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("add")),1)])),_:1},8,["onClick"]))])])])}var dt=n(3029),ht={props:{editedNote:Object,edit:Boolean},data(){return{title:"",text:""}},methods:{closeModal(){this.$emit("close"),this.text=this.title=""},addNote(){if(""!=this.title&&""!=this.text){const t={title:this.title,text:this.text,date:(new Date).toLocaleDateString(),id:(0,dt.Z)()};this.$emit("addNote",t),this.closeModal()}},changeNote(){if(""!=this.title&&""!=this.text){const t={title:this.title,text:this.text,date:(new Date).toLocaleDateString(),id:this.editedNote.id};this.$emit("changedNote",t),this.closeModal()}}}};const ut=(0,C.Z)(ht,[["render",ct]]);var _t=ut,pt={components:{Navbar:$,NotesList:Y,AddNote:ot,ModalWindow:_t},data(){return{isModalOpen:!1,notes:[],editedNote:null,edit:!1,searchVal:""}},methods:{addNote(t){this.notes=[...this.notes,t]},delNote(t){this.notes=this.notes.filter((e=>e.id!=t))},change(t){this.isModalOpen=this.edit=!0;let e=this.notes.find((e=>e.id==t));this.editedNote=e},changedNote(t){this.notes.forEach((e=>{e.id==t.id&&(e.title=t.title,e.text=t.text,e.date=t.date)}))},getNotes(){let t=localStorage.notes;t&&(this.notes=JSON.parse(t))}},mounted(){this.getNotes()},computed:{filterNotes(){return this.searchVal?this.notes.filter((t=>t.title.toLowerCase().includes(this.searchVal.toLowerCase()))):this.notes}},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const gt=(0,C.Z)(pt,[["render",i]]);var vt=gt,mt=JSON.parse('{"notes":"Заметки","allNotes":"Все заметки","noNotes":"Нет заметок","list":"Список","grid":"Сетка","edit":"РЕДАКТИРОВАТЬ","del":"Удалить","addNote":"Добавить заметку","add":"Добавить","cansel":"Отмена","changeNote":"Изменить заметку","change":"изменить","searchInput":"Поиск..."}'),ft=JSON.parse('{"notes":"Eslatmalar","allNotes":"Barcha eslatmalar","noNotes":"Eslatmalar Yoq","list":"Roʻyxat","grid":"Setka","edit":"O\'ZGARTIRISH","del":"o\'chirish","addNote":"Eslatma qo’shish","add":"Qo’shish","cansel":"Bekor qilish","changeNote":"Elsatmani tahrirlash","change":"o\'zgartirish","searchInput":"Qidirish..."}');const wt={ru:mt,uz:ft};var Nt=n(7853);const bt=(0,o.ri)(vt),kt=(0,Nt.o)({legacy:!0,locale:"ru",fallbackLocale:"ru",messages:wt});bt.use(kt),bt.mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,a){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],a=t[d][2];for(var l=!0,r=0;r<o.length;r++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(l=!1,a<i&&(i=a));if(l){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[o,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/NoteTodo/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,a,i=o[0],l=o[1],r=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var d=r(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4934)}));o=n.O(o)})();
//# sourceMappingURL=app.8a74e68d.js.map