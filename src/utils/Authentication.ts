class Authentication{
    public static compareSecret = (userSecret: string, authSecret: string) : boolean => {
        return userSecret === authSecret;
    }
}

export default Authentication;