const transformFunc = (weirdExpression) => {
    // Split the input expression into an array of parts based on spaces
    const parts = weirdExpression.split(" ");
  
    // Define a operator to replace 'ebong' with '&&' and 'othoba' with '||'
    const operator = {
      ebong: "&&",
      othoba: "||",
    };
  
    // Map each part of the expression using the operator
    const transformParts = parts.map((part) => operator[part] || part);
  
    // Join the transformed parts back into a string
    let transformedExpression = transformParts.join(" ");
  
    // Handle special cases:
    if (transformedExpression === "&&") {
      transformedExpression = "ebong"; // If the result is '&&', replace it with 'ebong'
    } else if (transformedExpression === "||") {
      transformedExpression = "othoba"; // If the result is '||', replace it with 'othoba'
    } else if (
      transformedExpression.includes("&& &&") ||
      transformedExpression.includes("|| ||")
    ) {
      // If there are multiple occurrences of '&&' or '||', replace them with 'ebong' and 'othoba' respectively
      transformedExpression = transformedExpression.replaceAll("&&", "ebong");
      transformedExpression = transformedExpression.replaceAll("||", "othoba");
      transformedExpression = transformedExpression.replaceAll(
        "ebong ebong",
        "ebong &&"
      );
      transformedExpression = transformedExpression.replaceAll(
        "othoba othoba",
        "othoba ||"
      );
    } else if (transformedExpression.endsWith("||")) {
      // If the expression ends with '||', replace it with 'othoba'
      const newExpression = transformedExpression.split(" ");
      newExpression.pop();
      newExpression.push("othoba");
      transformedExpression = newExpression.join(" ");
    } else if (transformedExpression.endsWith("&&")) {
      // If the expression ends with '&&', replace it with 'ebong'
      const newExpression = transformedExpression.split(" ");
      newExpression.pop();
      newExpression.push("ebong");
      transformedExpression = newExpression.join(" ");
    }
  
    // Return the transformed expression
    return transformedExpression;
  };
  
  const weirdExpressions = [
    "a othoba b",
    "b ebong c othoba d",
    "ebong ebong othoba othoba ebong",
    "((ebong) othoba ebong) ebong othoba",
    "(ebong othoba (ebong ebong ((othoba) othoba (ebong))))",
    "ebong",
    "othoba othoba othoba othoba ebong",
  ];
  
  // Test the expressions and log the results
  for (const expression of weirdExpressions) {
    const result = transformFunc(expression);
    console.log(result);
  }
  
  
