import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import MenuSistema from '../../MenuSistema';


export default function MenuSistema (props) {

   return(
       <div>
          <MenuSistema tela={'cliente'} />

           <Menu inverted>
              
               <Menu.Item
                   content='Home'
                   active={props.tela === 'home'}
                   as={Link}
                   to='/'
               />

               <Menu.Item
                   content='Cliente'
                   active={props.tela === 'cliente'}
                   as={Link}
                   to='/form-cliente'
               />
              <Menu.Item
                  content="Lista Cliente"
                  active={props.tela === 'list-cliente'}
                  as={Link}
                  to="/list-cliente"
               />
              <Menu.Item
                   content='Produto'
                   active={props.tela === 'produto'}
                   as={Link}
                   to='/form-produto'
               />
               <Menu.Item
                  content="Lista Produto"
                  active={props.tela === 'list-produto'}
                  as={Link}
                  to="/list-produto"
                  />
               <Menu.Item
                   content='Entregador'
                   active={props.tela === 'entregador'}
                   as={Link}
                   to='/form-entregador'
               />
              <Menu.Item
                 content='Entregador'
                 active={props.tela ==='List entregador'}
                 as={Link}
                 to='/List-entregador'
                 />

           </Menu>
       </div>
   )
}

export default function MenuSistema(props) {
   return (
       <div>
           <MenuSistema tela={props.tela} />

           <Menu inverted>
               <Menu.Item
                   content="Home"
                   active={props.tela === "home"}
                   as={Link}
                   to="/"
               />

               <Menu.Item
                   content="Cliente"
                   active={props.tela === "cliente"}
                   as={Link}
                   to="/form-cliente"
               />
               <Menu.Item
                   content="Lista Cliente"
                   active={props.tela === "list-cliente"}
                   as={Link}
                   to="/list-cliente"
               />
               
               <Menu.Item
                   content="Produto"
                   active={props.tela === "produto"}
                   as={Link}
                   to="/form-produto"
               />
               <Menu.Item
                   content="Lista Produto"
                   active={props.tela === "list-produto"}
                   as={Link}
                   to="/list-produto"
               />
               
               <Menu.Item
                   content="Entregador"
                   active={props.tela === "entregador"}
                   as={Link}
                   to="/form-entregador"
               />
               <Menu.Item
                   content="Lista Entregador"
                   active={props.tela === "list-entregador"}
                   as={Link}
                   to="/list-entregador"
               />
               
               <Menu.Item
                   content="Venda"
                   active={props.tela === "venda"}
                   as={Link}
                   to="/form-vendas"
               />
               <Menu.Item
                   content="Lista Vendas"
                   active={props.tela === "list-vendas"}
                   as={Link}
                   to="/vendas"
               />
           </Menu>
       </div>
   );
}

