import React from 'react';

export function ProfileStatus (props) {
  const [status, setStatus] = React.useState(props.status)  //Глобальный стейт из запроса с серверногоАПИ
  const [editMode, setEditMode] = React.useState(false)

  React.useEffect(()=>{
    setStatus(props.status)
  },[props.status])

 const activateEditMode = () => {
  setEditMode(true);
  //сет стейт асенхронен на эвент лупах
}

const deEditMode = () => {
  setEditMode(false)
 props.updateStatus(status)
}
const onStatusChange = (e) =>{
  setStatus(e.currentTarget.value)
}
    return(
      <div>
        {!editMode &&
          <div>
            <span
              onDoubleClick={()=>activateEditMode() }>
              {props.status  || "-------"}
            </span> {/*Здесь в пропсах Глобальный стейт!!!*/}
          </div>
        }
        {editMode &&
          <div>
            <input
              onChange = {onStatusChange}
              autoFocus={true}
              onBlur = {deEditMode}
              value = {status}
              />
        </div>
      }
      </div>
    )

}

