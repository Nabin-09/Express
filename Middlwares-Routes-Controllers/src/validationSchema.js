export const createUserSchema = {
    username : {
        isLength : {
            options : {
                min : 5,
                max : 32
            },
            errorMessage : 'User should be between 5-32 characters'
        },
        notEmpty : {
            errorMessage : 'Cannot be empty'
        },
        isString : {
            errorMessage : 'Should be a string'
        }
    },
    displayName : {
        notEmpty : true,
    }
}