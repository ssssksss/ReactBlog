import React,{useEffect, useState} from 'react';

const Page = (props) => {
    const [page,setPage] = useState('mainpage');

    useEffect(()=> {
        setPage(props.page);
      },[props.page])

    switch(page) {
        case 'main':
            return(<Main1></Main1>);
            break;
        case 'html1':
            return(<Html1></Html1>);
            break;
        case 'html2':
            return(<Html2></Html2>);
            break;
        case 'html3':
            return(<Html3></Html3>);
            break;
        case 'html4':
            return(<Html4></Html4>);
            break;
        case 'html5':
            return(<Html5></Html5>);
            break;
        case 'html6':
            return(<Html6></Html6>);
            break;
        case 'html7':
            return(<Html7></Html7>);
            break;

            default:
                return(<></>);
            break;
    }

}
export default Page;

const Main1 = () => {
    return(
        <div>
            Main1의 시작
        </div>
    );
}
const Html1 = () => {
    return(
        <div>
            HTML1의 시작
        </div>
    );
}

const Html2 = () => {
    return(
        <div>
            HTML2의 시작
        </div>
    );
}

const Html3 = () => {
    return(
        <div>
            HTML3의 시작
        </div>
    );
}

const Html4 = () => {
    return(
        <div>
            HTML4의 시작
        </div>
    );
}

const Html5 = () => {
    return(
        <div>
            HTML5의 시작
        </div>
    );
}

const Html6 = () => {
    return(
        <div>
            HTML6의 시작
        </div>
    );
}
const Html7 = () => {
    return(
        <div>
            HTML7의 시작
        </div>
    );
}

