export const EKLE = "EKLE";
export const TEMIZLE = "TEMIZLE";
export const ISARETLE = "ISARETLE";

export const listeyeEkle = text => {
    return { type: EKLE , payload: text}
}