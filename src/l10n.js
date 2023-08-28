
//json
import nav from './l10n/nav.json'
import cks from './cks.js'
let lang=[
    {title:'简体中文',id:'cn'},
    {title:'English',id:'eng'}
]
 export default class l10n {
    getlanglist(){
        let a=[]
        for (let i = 0, len = lang.length; i < len; i++) 
        {
            a.push(lang[i]['id'])
        }
        return a
    }
    init(){
        let l=this.getlanglist()
        console.log(l)
        if (String(cks.getCookieValue('lang')) in l){
            this.ChangeLang(String(cks.getCookieValue('lang')))
        }
        else{
            for (let i = 0, len = l.length; i < len; i++) {
                if (String(Navigator.language).indexOf(l[i])){
                    this.ChangeLang(l[i])
                }
            }   
        }
    }
    l10nlist(){
        return lang
    }
    ChangeLang(id){
        console.log(id)
        let l=nav[String(id)]
        let key=Object.keys(l)
        cks.setCookie('lang',String(id),9999)
        for (let i = 0, len = key.length; i < len; i++) 
        {
            document.getElementById(key[i]).innerText=l[key[i]]
        }

    }
}
