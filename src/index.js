
//layui
import 'layui/dist/css/layui.css'
import 'layui/dist/layui.js'

//logo 
import logotxt from './img/logopng.png'

//l10n
import l10n_ from './l10n.js'
let l10n=new l10n_()

//code
import './code/index'

//document
import './doc'
window.onload = function(){
    layui.use(function(){
        var dropdown = layui.dropdown,
        layer=layui.layer;
        //l10n初始化

        l10n.init()

        //----
        document.getElementById('logo').src=logotxt
        console.log(l10n.l10nlist())
        // 渲染
        dropdown.render({
          elem: '#l10n',
          data: l10n.l10nlist(),
          click: function(data){
            alert(data.id)
            l10n.ChangeLang(data.id)
          }
        });

        

        //最后
        docsize()
      });
}