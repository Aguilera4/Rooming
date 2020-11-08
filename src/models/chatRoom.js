class ChatRoom {

    // Constructor de la lase
    constructor(name_user,comment_text,date_created){
        this.name_user = name_user;
        this.comment_text = comment_text;
        this.date_create = date_created;
    }

    // Devuelve el nombre del usuario
    getNameUser(){
        return this.name_user;
    }

    // Devuelve el comentario
    getComment(){
        return this.comment_text;
    }

    // Modificar el contenido del comentario
    modifyComment(new_comment){
        this.comment_text = new_comment;
    }
    
}

module.exports = ChatRoom;