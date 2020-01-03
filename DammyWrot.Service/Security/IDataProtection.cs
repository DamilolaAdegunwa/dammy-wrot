using System;
using System.Collections.Generic;
using System.Text;

namespace DammyWrot.Service.Security
{
    public interface IDataProtection
    {
        public string Encrypt(string clearText, string EncryptionKey);
        public string Decrypt(string cipherText, string EncryptionKey);
    }
}
