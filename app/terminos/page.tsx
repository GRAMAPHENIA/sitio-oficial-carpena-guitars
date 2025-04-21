import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Guitarras y Bajos Personalizados",
  description:
    "Nuestros términos y condiciones establecen las reglas, directrices y acuerdos que rigen el uso de nuestros servicios y productos.",
}

export default function TerminosPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Términos y Condiciones</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 15 de abril de 2023</p>

        <div className="prose max-w-none">
          <p>
            Bienvenido a Carpena Guitars. Estos términos y condiciones describen las reglas y regulaciones para el uso del
            sitio web de Carpena Guitars.
          </p>

          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes
            usando el sitio web de Carpena Guitars si no aceptas todos los términos y condiciones establecidos en esta
            página.
          </p>

          <h2>Licencia</h2>

          <p>
            A menos que se indique lo contrario, Carpena Guitars y/o sus licenciantes poseen los derechos de propiedad
            intelectual de todo el material en Carpena Guitars. Todos los derechos de propiedad intelectual están
            reservados. Puedes ver y/o imprimir páginas desde nuestro sitio web para tu uso personal sujeto a las
            restricciones establecidas en estos términos y condiciones.
          </p>

          <p>No debes:</p>

          <ul>
            <li>Republicar material de nuestro sitio web</li>
            <li>Vender, alquilar o sublicenciar material de nuestro sitio web</li>
            <li>Reproducir, duplicar o copiar material de nuestro sitio web</li>
            <li>
              Redistribuir contenido de Carpena Guitars (a menos que el contenido esté específicamente hecho para
              redistribución)
            </li>
          </ul>

          <h2>Comentarios de usuario</h2>

          <p>
            Ciertas partes de este sitio web ofrecen la oportunidad a los usuarios de publicar e intercambiar opiniones
            e información en determinadas áreas. Carpena Guitars no filtra, edita, publica o revisa los comentarios antes de
            su presencia en el sitio web. Los comentarios no reflejan los puntos de vista y opiniones de Carpena Guitars,
            sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que
            publica sus puntos de vista y opiniones.
          </p>

          <p>
            En la medida permitida por las leyes aplicables, Carpena Guitars no será responsable por los comentarios o por
            cualquier responsabilidad, daños o gastos causados y/o sufridos como resultado de cualquier uso y/o
            publicación y/o aparición de los comentarios en este sitio web.
          </p>

          <p>
            Carpena Guitars se reserva el derecho de monitorear todos los comentarios y eliminar cualquier comentario que
            pueda considerarse inapropiado, ofensivo o que infrinja estos Términos y Condiciones.
          </p>

          <h2>Pedidos y pagos</h2>

          <p>
            Al realizar un pedido a través de nuestro sitio web, garantizas que tienes la capacidad legal para celebrar
            contratos vinculantes y que tienes al menos 18 años de edad.
          </p>

          <p>
            Para realizar un pedido personalizado, se requiere un depósito inicial no reembolsable del 50% del precio
            total. El saldo restante debe pagarse antes de la entrega del instrumento.
          </p>

          <p>
            Los precios de nuestros productos están sujetos a cambios sin previo aviso. Nos reservamos el derecho de
            modificar o discontinuar cualquier producto sin previo aviso.
          </p>

          <p>
            No garantizamos que la calidad de los productos, servicios, información u otro material comprado u obtenido
            por ti cumpla con tus expectativas, o que cualquier error en el servicio será corregido.
          </p>

          <h2>Plazos de entrega</h2>

          <p>
            Los plazos de entrega para instrumentos personalizados varían según la complejidad del proyecto y la carga
            de trabajo actual. Se proporcionará una estimación del tiempo de entrega al confirmar el pedido.
          </p>

          <p>
            Carpena Guitars no será responsable por retrasos en la entrega causados por circunstancias fuera de nuestro
            control razonable, incluyendo, pero no limitado a, desastres naturales, problemas con proveedores o
            transportistas, o cambios solicitados por el cliente durante el proceso de fabricación.
          </p>

          <h2>Garantía</h2>

          <p>
            Todos nuestros instrumentos están cubiertos por una garantía limitada de 2 años que cubre defectos en
            materiales y mano de obra. Esta garantía no cubre el desgaste normal, daños causados por uso indebido,
            modificaciones no autorizadas o condiciones ambientales extremas.
          </p>

          <p>
            Para hacer una reclamación de garantía, debes contactarnos con una descripción detallada del problema y, si
            es posible, fotos o videos que muestren el defecto.
          </p>

          <h2>Devoluciones y cancelaciones</h2>

          <p>
            Debido a la naturaleza personalizada de nuestros instrumentos, no aceptamos devoluciones a menos que el
            instrumento tenga un defecto cubierto por nuestra garantía.
          </p>

          <p>
            Si deseas cancelar un pedido en progreso, ten en cuenta que el depósito inicial no es reembolsable.
            Dependiendo del estado de avance del proyecto, es posible que se requiera un pago adicional para cubrir los
            costos de materiales y trabajo ya realizados.
          </p>

          <h2>Hipervínculos a nuestro contenido</h2>

          <p>Las siguientes organizaciones pueden vincular a nuestro sitio web sin aprobación previa por escrito:</p>

          <ul>
            <li>Agencias gubernamentales</li>
            <li>Motores de búsqueda</li>
            <li>Organizaciones de noticias</li>
            <li>
              Distribuidores de directorios en línea pueden vincular a nuestro sitio web de la misma manera que hacen
              hipervínculos a los sitios web de otras empresas que figuran en la lista
            </li>
            <li>
              Empresas acreditadas en todo el sistema, excepto organizaciones sin fines de lucro, centros comerciales de
              caridad y grupos de recaudación de fondos de caridad que no pueden hacer hipervínculos a nuestro sitio web
            </li>
          </ul>

          <p>
            Estas organizaciones pueden vincular a nuestra página de inicio, a publicaciones o a otra información del
            sitio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio,
            respaldo o aprobación de la parte vinculante y sus productos y/o servicios; y (c) encaje dentro del contexto
            del sitio de la parte vinculante.
          </p>

          <h2>Reserva de derechos</h2>

          <p>
            Nos reservamos el derecho de solicitarte que elimines todos los enlaces o cualquier enlace particular a
            nuestro sitio web. Apruebas eliminar inmediatamente todos los enlaces a nuestro sitio web cuando se
            solicite. También nos reservamos el derecho de modificar estos términos y condiciones y su política de
            enlaces en cualquier momento. Al vincular continuamente a nuestro sitio web, aceptas estar vinculado y
            seguir estos términos y condiciones de vinculación.
          </p>

          <h2>Eliminación de enlaces de nuestro sitio web</h2>

          <p>
            Si encuentras algún enlace en nuestro sitio web que sea ofensivo por cualquier motivo, puedes contactarnos e
            informarnos en cualquier momento. Consideraremos solicitudes para eliminar enlaces, pero no estamos
            obligados a hacerlo o a responder directamente.
          </p>

          <p>
            No aseguramos que la información en este sitio web sea correcta, no garantizamos su integridad o precisión;
            ni nos comprometemos a asegurar que el sitio web permanezca disponible o que el material en el sitio se
            mantenga actualizado.
          </p>

          <h2>Limitación de responsabilidad</h2>

          <p>
            En la máxima medida permitida por la ley aplicable, excluimos todas las representaciones, garantías y
            condiciones relacionadas con nuestro sitio web y el uso de este sitio web. Nada en este descargo de
            responsabilidad:
          </p>

          <ul>
            <li>Limitará o excluirá nuestra responsabilidad o la tuya por muerte o lesiones personales</li>
            <li>Limitará o excluirá nuestra responsabilidad o la tuya por fraude o tergiversación fraudulenta</li>
            <li>
              Limitará cualquiera de nuestras responsabilidades o las tuyas de cualquier manera que no esté permitida
              por la ley aplicable
            </li>
            <li>
              Excluirá cualquiera de nuestras responsabilidades o las tuyas que no puedan ser excluidas según la ley
              aplicable
            </li>
          </ul>

          <p>
            Las limitaciones y prohibiciones de responsabilidad establecidas en esta sección y en otras partes de este
            descargo de responsabilidad: (a) están sujetas al párrafo anterior; y (b) rigen todas las responsabilidades
            que surjan bajo el descargo de responsabilidad, incluidas las responsabilidades que surjan en contrato, en
            agravio y por incumplimiento de obligación legal.
          </p>

          <h2>Contacto</h2>

          <p>Si tienes alguna pregunta sobre estos Términos y Condiciones, contáctanos:</p>

          <p>
            Email: info@Carpena Guitars.com
            <br />
            Teléfono: +54 11 1234 5678
          </p>
        </div>
      </div>
    </div>
  )
}
