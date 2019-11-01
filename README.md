### `npm start` 启动本地开发环境

### `npm test` 启动测试用例

### `npm run build` 启动项目打包

### `npm run eject`  释放被隐藏起来的配置文件和所有依赖，该命令只能运行一次

10-9:
    1.组件：无状态组件 === 函数
    2.组件的三个要素： 类型(自定义组件/原生dom类型)，属性，内容或子元素
    3.React.createElement() 创建虚拟dom
    3.1 三个参数：原生dom元素类型， 属性(对象)，内容或者子元素[如果子元素就一个，那么直接写，如果多个子元素，需要将子元素放到数组里，并且每个子元素都需要加 key 属性]
    *自定义组件使用的时候，必须首字母是大写，
    *同样手写字母一定不能是小写，因为小写的时候，react会默认从原生的dom库里去找，找不到就报错。

10-10:
    1.jsx： 是createElement方法的语法糖，是js的扩展，它看上去很像html，但底层是js，所以拥有全部js的特性
    
    2.组件
        2.1 无状态组件：
            它只能接受一个props属性；
            优点：加载快，渲染快；
            缺点：功能单一，只能存一些dom片段；
            使用：ul组件去使用

        2.2 class组件：
             它拥有全部的react特性；
             优点：功能强大；
             缺点：需要实例化，想对比无状态组件加载慢，渲染慢
             使用：作为功能组件

10-11 :点组件
        1.点组件概念：一个对象点属性得出的元素类型并使用 jsx 来书写
        1.2 好处：灵活 可复用性强
        1.3 点组件是用 props 控制的 2.模块化开发：每一个 jsx 文件就是一个独立的模块，它就像是积木一样儿用到就复用：
        2.1 好处：代码少， 解构精简，便于解构； 3.项目解构：
        3.1 分布式【优先使用】：它是以模块分布化，每一个模块都是一个固定得文件夹，该文件夹内有独立静态源：
        3.2 集中式：以文件类型分类的
        
10-14
    1. state状态：
        定义：class组件自有的状态；不可能直接修改，必须使用setState方法；
        作用：控制组件内的元素的状态；
    2. props传值及组件间的通信；
    3. 属性的默认值：defaultProps:只有class组件有；
    4. 属性的类验证：propTypes：只有class组件有：需要引入第三方的包'prop-types'
    5. 总结：
        5.1 state和props相同点：
            1. 都是存数据的
            2. 修改后都会触发更新
            3. 都是控制元素的
            
        5.2 state和props不同点：
            1. 状态只能是自身的，属性是父级传给子级的；
            2. 状态是组件自身可以修改，属性必须是父级修改，自己不能修改
            3. 属性可以设置默认值和类型验证，状态没有

10-15:
  1.在react里修改state是异步的，所以我们如果需要修改后立即拿到被修改后的state，需要在使用setState的时候传函数的形式去写；
  2.setState({}) === 默认就是异步修改
  3.setState(function, function);===将异步处理成同步；
    这两个回调函数，第一个是用来修改state的，第二个回调是获取被修改后的state

10-16:
    1.生命周期：程序在不同阶段呈现的状态；
        挂载时：constructor  render  componentDidMount
        更新时: render  componentDidUpdate
        卸载时：componentWillUnmount  
    * 组合字典: component【组件】、Did【完成】、will【准备】、Mount【挂载】、unMount【卸载】、update【更新】
    
    2. shouldComponentUpdate：不常用生命周期函数；
        定义：用来拦截新的属性和状态，用新旧值来控制组件是否更新，从而优化性能；
        参数：第一个是新的属性，第二个是新的状态；
        注意：它不会对强制更新做处理，因为强制更新没有新的属性和状态；

    3.forceUpdata:强制更新

 10-17:
    1. handleClick = () => {}
            优先使用的函数声明方式
		    它的好处在于，我们的this指向是当前环境的对象
	        箭头函数自身没有this，它会逐级向上找this，找到后拿过来
    
    2. andleClick01() {}
            这种es6的函数声明方法，在class内部会丢失this
    
    3.  解决es6方式声明的函数指针绑定问题
		this.handleClick01 = this.handleClick01.bind(this);

       
		event对象常用的:清冒泡.禁止默认行为,获取元素[当前被触发的元素,事件所绑定的元素]、坐标值
		react合成事件对象里有一个很重要的api，强制保留event对象属性值 event.persist()

		// 清除冒泡:必须显示的使用stopPropagation
		event.stopPropagation()

		// 禁止默认事件:preventDefault()
		event.preventDefault()

		// 获取被触发的元素
		event.target

		// 获取事件触发的元素
		event.currentTarget 
    
		// 获取元素的event对象
		event.natveEvent

 10-21:
    key在哪里使用:
        元素的key只有放在就近的数组上下文中才有意义，
        key只是在兄弟节点之间必须唯一 所以不用担心整个项目里有重复的，
        只要是兄弟节点之间的key不重复就行。

 10-23:
    1. 受控组件
        定义：如果一个表单元素的值是由React控制，就其称为受控组件。
        
    2.非受控组件
        定义: 如果一个表单组件没有value props(单选按钮和复选按钮对应的是 checked props)时,
            就可以称为非受控组件。

    非受控组件有哪些：
        1.使用ref绑定的input元素
        2. <input type="file">
        
    受控组件有：
        表单元素如：input、textarea和select

10-25:
      问题：
        懒加载默认情况下webpack会将引入的所有组件都打包成一个js文件，当用户访问时，会造成请求消耗，对有些不常用的功能也会被加载进去，造成不必要的浪费。

      解决： 使用懒加载，按需加载组件、节省性能开销；拆分js文件，当用户操作需要显示该组件的时候才会请求加载进来
     
      语法： 使用react.lazy方法加载组件，该组件上有一个fallback属性，当懒加载组件还未加载成功时，显示fallback属性里的内容

      缺点： 增加了HTTP请求次数，如果用户此时网络不好的话，就可能需要更多的时间加载组件

      注意： 所以在使用懒加载的时候，酌情使用，对一些内容体积小的可以不用懒加载，尤其是首屏就需要用户看到的内容一律不要用懒加载。

 10-28 上下文对象:
        React.createContext：创建上下文对象
        Context.Provider:上下文数据提供者组件
        Context.Consumer:上下文组件渲染组件
        Class.contextType:订阅者
    
    定义:
        使多个组件共享一个数据源，实现状态共享，相当于内置版的简易redux; 
        解决了传统属性传参多层组件传值显示的写法，上下文对象可以跳过中间多层嵌套组件，直接让父组件和后代组件通信；

    语法：
        1. 使用React.createContext创建上下文对象
        2. 在父组件或根组件中使用context.Provider组件提供数据，数据写在该组件的value属性里。
        3. 在后代组件中使用Context.Consumer组件，获取上游组件中Provider提供的数据，Consumer组件固定写法是，在组件里写一个回调函数
        4. contextType 它是class组件特有的私有属性，它的值就是上下文对象，一旦使用后，我们就可以用this.context获取到上下文对象里的默认值了