# KycDataCredential

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "VerifiableAttestation", "KycDataCredential"],
    "credentialSubject": {
        "identificationprocess": {
            "agentname": "TROBOT",
            "companyId": "1234",
            "result": "SUCCESS",
            "identificationTime": "2023-07-10T14:45:10+02:00",
            "identificationId": "TST-ELXNG",
            "transactionNumber": "1234",
            "type": "APP"
        },
        "userData": {
            "dateOfBirth": "1993-04-08",
            "familyName": "DOE",
            "firstName": "Jane"
        },
        "identificationdocument": {
            "type": "IDCARD",
            "country": "DE",
            "validuntil": "2034-08-01",
            "number": "L01X00T27",
            "dateissued": "2021-08-31"
        },
        "performedKycChecks": {
            "livenessscreenshot": true,
            "securityfeaturevideo": true
        }
    },
    "id": "identity#KycCredential#3add94f4-28ec-42a1-8704-4e4aa51006b4",
    "issued": "2021-08-31T00:00:00Z",
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "image": {
            "id": "https://demo-wallet.infocert-labs.eu/svg/INFOCERT.svg",
            "type": "Image"
        },
        "name": "InfoCert",
        "type": "Profile",
        "url": "https://demo-wallet.infocert-labs.eu/svg/INFOCERT.svg"
    },
    "validFrom": "2021-08-31T00:00:00Z",
    "issuanceDate": "2021-08-31T00:00:00Z",
    "evidence": {
        "documentPresence": "Digital",
        "evidenceDocument": "KYC",
        "subjectPresence": "Physical",
        "type": "DocumentVerification",
        "verifier": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN"
    }
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