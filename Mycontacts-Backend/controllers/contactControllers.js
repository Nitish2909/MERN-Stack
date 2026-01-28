//@desc Get All contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res) =>{
    return res.status(200).json({
        message:"Get all Contacts"
    })  
}

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) =>{
    return res.status(200).json({
        message:"Create Contact"
    })  
}

//@desc Get Individual contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) =>{
    return res.status(200).json({
        message:`Get Contact for ${req.params.id}`
    })  
}

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) =>{
    return res.status(200).json({
        message:`Update Contact for ${req.params.id}` 
    })  
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) =>{
    return res.status(200).json({
        message:`Delete Contact for ${req.params.id}` 
    })  
}


module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}