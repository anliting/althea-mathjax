;(async()=>{
    await module.scriptByPath('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML')
    MathJax.Hub.Config({
        tex2jax:{
            skipTags:[
                'script',
                'noscript',
                'style',
                'textarea',
                'pre',
                'code'
            ],
            ignoreClass:['bordered'],
        },
        messageStyle:'none',
    })
    this.addPagePlugin(div=>{
        for(let s of div.getElementsByTagName('script'))
            if(s.type=='althea-mathjax'){
                s.type='math/tex'
                MathJax.Hub.Queue(['Typeset',MathJax.Hub,s])
            }
    })
})()
