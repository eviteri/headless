import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const removeEmptyElements = (array) =>{
    return array.reduce( (previous, el) => {
        if(el !== ""){
            previous.push(el);
        }
        return previous
    }, [])
}

const removeDuplicateElementes = (array) => {
    return array.reduce((previous, el)=>{
        let found = previous.find( (element) => {
            return element === el
        })
        if(!found){
            previous.push(el);
        }
        return previous;
    }, [])
}

const getSlug = (url) => {
    const parts = url.split('/');
    const removeBlanks = removeEmptyElements(parts);
    const removeDuplicates = removeDuplicateElementes(removeBlanks);
    let part1, part2, route;
    [part1, part2, ...route] = removeDuplicates;
    let stringRoute = '/' + route.join("/");
    return stringRoute;
}


const buildMenu = (items) => {
    return (
        <nav>
            <ul>
                {items.map( (item, index)=>{
                    let li = null;
                    if(item.children){
                        li = (
                            <li key={index}>
                                <a href="#accrodion">{item.title}</a>
                                <ul className="menu-panel">
                                    {buildMenu(item.children)}
                                </ul>
                            </li>
                        )
                    }else{
                        if(item.object === "custom"){
                            li = (
                                <li key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: item.title }} />
                                </li>
                            )
                        }else{
                            let url = getSlug(item.url);
                            li = (
                                <li key={index}>
                                    <a href={url} dangerouslySetInnerHTML={{ __html: item.title }} />
                                </li>
                            )
                        }
                    }
                    return li
                })}
            </ul>
        </nav>
    )

}

class Menu extends Component {

    componentDidMount(){
        this.props.onGetMenu();
    }

    render(){
        let content = null;
        
        if(this.props.loading){
            content = (<p>Loading.....</p>)
        }

        if(this.props.items){
            content = buildMenu(this.props.items)
        }

        return(
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.menu.items,
        loading: state.menu.loading,
        error: state.menu.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMenu: () => dispatch(actions.getMenu())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);