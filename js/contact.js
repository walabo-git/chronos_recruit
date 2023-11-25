(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const submitCallbackFn = async (e) => {
      e.preventDefault();
      const name = form.name.value;
      const age = form.age.value;
      const job = form.job.value;
      const email = form.email.value;
      const phoneNumber = form.phoneNumber.value;
      const address = form.address.value;
      const message = `ご応募いただき、誠にありがとうございます。弊社​​に興味をお寄せいただき、大変嬉しく思います。\n\nこのメールは弊社の求人ご応募を受け付けたことを確認する自動返信メールです。\n\nご連絡いただきました内容をもとに、後日弊社採用担当よりご連絡いたしますので今しばらくお待ちくださいませ。\n\n\n【氏名】${name}\n【年齢】${age}\n【現在のご職業】${job}\n【メールアドレス】${email}\n【連絡先電話番号】${phoneNumber}\n【住所】${address}\n\n\n========================================\n株式会社クロノス\n〒491-0871 愛知県一宮市浅野字長池51\n\nhttps://chronos2015.co.jp/\nTEL: 0586-75-0910\n========================================`;
      try {
        await fetch(
          "https://jac8mybidc.execute-api.ap-northeast-1.amazonaws.com/prod/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: email,
              subject:
                "【株式会社クロノス 採用チーム】ご応募ありがとうございます",
              message,
            }),
          }
        );
      } catch (e) {
        console.error(e);
        alert(
          "メールの送信に失敗しました。一時的なエラーの可能性がありますので、時間をおいて再度お試しください。"
        );
        location.href = "/index.html";
        return;
      }
      location.href = "/thanx.html";
    };
    form.addEventListener("submit", submitCallbackFn, { passive: false });
  });
})();
