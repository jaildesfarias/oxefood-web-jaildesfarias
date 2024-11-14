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
                   content='Produto'
                   active={props.tela === 'produto'}
                   as={Link}
                   to='/form-produto'
               />

               <Menu.Item
                   content='Entregador'
                   active={props.tela === 'entregador'}
                   as={Link}
                   to='/form-entregador'
               />

           </Menu>
       </div>
   )
}


