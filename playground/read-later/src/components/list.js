import React from 'react'
import styled from 'styled-components'

const Link = styled.tr`
    opacity:  ${props=>(props.read === true ? '.3':'1')};
    .edit {
        pointer-events: ${props=>(props.read === true ? 'none':'enabled')};
    }
`

const List = (props) => {    
    const list = props.data;    

    const markRead = (link) => {
        link.read = !link.read;
        props.update(link)
    }
    const editLink = (link) => {
        props.edit(link)
    }

    const rows = list.map((row,index) => (        
            <Link key={index} read={row.read}>
             <td name="url"><a href={row.url} rel="noopener noreferrer" target="_blank">{row.url}</a></td>
             <td name="description">{row.description}</td>
             <td name="time">{row.timestamp}</td>
             <td name="read"><button onClick={()=>markRead(row)}>{row.read.toString()}</button></td>      
             <td name="actions"><button className="edit" onClick={()=>editLink(row)}>Edit</button></td>        
             <td name="actions"><button onClick={()=>props.delete(row.id)}>Delete</button></td>          
         </Link>         
    ))

    return(        
                list.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Description</th>
                            <th>Added</th>
                            <th>Read?</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                : 
                <h4>No links found! Add a link to get reading (well, later)</h4>
            
    );
}
export default List;