
let n = 1
getPAGE.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n=n+1
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 ){
            if(request.status >=200 && request.status < 300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                console.log(object)
                myName.textContent = object.name
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4 ){
            if(request.status >=200 && request.status < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
    }
}
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = () => {
        //创建div
        const div = document.createElement('div')
        //填写div
        div.innerHTML = request.response
        //在body插入div
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/main2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt','/style.css')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                //打印出request.response是获取style.css里面的内容
                console.log(request.response)
                //创建一个style标签
                const style = document.createElement('style')
                //在style标签里面填写   request.response获取的内容
                style.innerHTML = request.response
                //在head里面添加获取好的style
                document.head.appendChild(style)
            }else{
                alert('失败')
            }
        }
        
    }
    request.send()
}
