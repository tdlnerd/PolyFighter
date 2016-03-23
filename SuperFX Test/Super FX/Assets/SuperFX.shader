Shader "Custom/SuperFX" {
    Properties {
      _MainTex ("Texture", 2D) = "white" {}
      _Ramp ("Shading Ramp", 2D) = "gray" {}
      _Detail ("Detail", 2D) = "gray" {}
    }
    SubShader {
      Tags { "RenderType" = "Opaque" }
      CGPROGRAM
      #pragma surface surf Ramp
 
      sampler2D _Ramp;
 
      half4 LightingRamp (SurfaceOutput s, half3 lightDir, half atten) {
          half NdotL = dot (s.Normal, lightDir);
          half diff = NdotL * 0.5 + 0.5;
          half3 ramp = tex2D (_Ramp, float2(diff)).rgb;
          half4 c;
          c.rgb = s.Albedo * _LightColor0.rgb * ramp * (atten * 2);
          c.a = s.Alpha;
          return c;
      }
 
      struct Input {
          float2 uv_MainTex;
          float4 screenPos;
      };
      sampler2D _MainTex;
      sampler2D _Detail;
       
      void surf (Input IN, inout SurfaceOutput o) {
         
          float2 screenUV = (IN.screenPos.xy) / (IN.screenPos.w);
          screenUV *= float2(12*5,8*5);
          o.Albedo = tex2D (_Detail, screenUV).rgb * 1;
          o.Albedo *= tex2D (_MainTex, IN.uv_MainTex).rgb;
      }
      ENDCG
    }
    Fallback "Diffuse"
  }