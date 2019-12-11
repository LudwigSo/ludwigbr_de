export default class ContactConfig {
    private static mail: string = 'info@ludwigso.de';

    public static generateMailElement(): string {
        return new String().concat(
            '<a href="mailto:', 
            this.mail, 
            '">', 
            this.mail, 
            '</a>'
        );
    }

    private static telephoneNationalPrefix: string = "0157";
    private static telephoneInternationalPrefix: string ="+49 157"
    private static telephone: string = "8383 4588";

    public static generateTelephoneElement(national: boolean): string {
        const telephonePrefix: string = (national) ? this.telephoneNationalPrefix : this.telephoneInternationalPrefix;
        return new String().concat(
            '<a href="tel:', 
            telephonePrefix,
            ' ', 
            this.telephone, 
            '">', 
            telephonePrefix,
            ' ', 
            this.telephone,
            '</a>'
        ); 
    }
}