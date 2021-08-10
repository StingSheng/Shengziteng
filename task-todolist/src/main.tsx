import { ITodo} from './type.js'

let todos = []
let input = document.getElementById('input');
let list = document.getElementById('todos');

class CreateEl extends React.Component<ITodo>{
    state:ITodo ={
        content:'',
        finished: false
    }

    // 切换todo条目状态
    async toggleItem(item){
        this.setState({
            content: item.content,
            finished: false
        })
        // 改变条目的完成状态以达到样式切换
        item.finished = !item.finished
    }

    // 返回插入的值CreateEl
    render(){
        return (
            <div>
                {/* 获取所有的条目进行渲染 */}
                {todos.map((todo,index) => 
                <div key = {index}>
                    <div id = {'checkbox'} className = {todo.finished === true? 'todo-item todo-finished' : 'todo-item'}>
                        <i className = {'iconfont icon-checkbox'} onClick = {() =>this.toggleItem(todo)}></i>
                        <span className = {'todo-title'}>{todo.content}</span>
                        <i className = {'iconfont icon-delete'} onClick = {() =>delItem(todo)}></i>
                    </div>
                </div>)}
            </div>
        )
    }
}

// 添加todo条目
function addItem(item){
    // 把条目添加进本地存储当中并渲染
    todos.unshift(item)
    ReactDOM.render(<CreateEl content = {item.content} finished = {item.finished} />,list)
    localStorage.setItem('todos',JSON.stringify((todos)))
}

// 删除todo条目
function delItem(item){
    // 获取该条目在存储中的位置
    let index = todos.indexOf(item)
    // 删除该条目
    todos.splice(index, 1)
    // 存储新的内容
    localStorage.setItem('todos',JSON.stringify(todos))
    // 进行渲染
    ReactDOM.render(<CreateEl content = {item.content} finished = {item.finished} />,list)
}

// 监听键盘事件
input.addEventListener('keydown',event =>{
    // 读取输入的内容
    let inputContent = (document.getElementById('input') as HTMLInputElement).value
    // 判断键入的是否为回车键以及是否有内容
    if(event.key === 'Enter' && inputContent !== ''){
        let todo = {content:inputContent,finished:false}
        addItem(todo);
        // 清空输入框（注意此处不能用inputContent = ''因为此属性用传递的的方式不能改变值
        (document.getElementById('input') as HTMLInputElement).value = ''
    }
})