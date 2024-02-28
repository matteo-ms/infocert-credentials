# IBAN

```json
{
    "@context": ["https://www.w3.org/2023/credentials/v1"],
    "type": ["VerifiableCredential", "IBAN"],
    "credentialSubject": {
        "accountId": "1234567890",
        "IBAN": "DE99123456789012345678",
        "BIC": "DEUTDEDBBER",
        "birthDate": "1958-08-17",
        "familyName": "DOE",
        "givenName": "JOHN",
        "id": "identity#IBAN"
    },
    "id": "identity#IBAN#3add94f4-28ec-42a1-8704-4e4aa51006b4",
    "issued": "2021-08-31T00:00:00Z",
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "image": {
            "id": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w",
            "type": "Image"
        },
        "name": "CH Authority",
        "type": "Profile",
        "url": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w"
    },
    "validFrom": "2021-08-31T00:00:00Z",
    "issuanceDate": "2021-08-31T00:00:00Z"
}
```

## Mapping example

```json
{
    "id": "<uuid>",
    "issuer": {
        "id": "<issuerDid>"
    },
    "credentialSubject": {
        "id": "<subjectDid>"
    },
    "issuanceDate": "<timestamp>"
}
```